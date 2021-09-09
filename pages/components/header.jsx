import Link from "next/link";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const router = useRouter();

	const handleLogOut = () => {
		Cookie.remove("userData");
		Cookie.remove("token");
		setIsLoggedIn(false);
		router.push("/");
	};

	useEffect(() => {
		const loggedIn = Cookie.get("token");
		if (loggedIn) {
			setIsLoggedIn(true);
		}
	}, [isLoggedIn]);

	return (
		<nav className="py-5 border-b border-lightBorder filter bg-white bg-opacity-70 fixed w-screen z-10 backdrop-filter backdrop-blur-md backdrop-saturate-150">
			<div className="container mx-auto max-w-screen-xl flex justify-between items-center">
				<div>
					<Link href="/">
						<a className="font-rampart font-bold text-2xl">K-Blog📝</a>
					</Link>
				</div>
				<div className="flex items-center">
					<ul className="flex justify-center space-x-10 mr-12 font-semibold text-skin-base text-lg cursor-pointer relative">
						<Link href="/">
							<a className="hoverEffect font-klee">Services</a>
						</Link>
						<Link href="/mdInput">
							<a className="hoverEffect font-klee">Create Blog</a>
						</Link>
						<Link href="/">
							<a className="hoverEffect font-klee">Work</a>
						</Link>
						<Link href="/">
							<a className="hoverEffect font-klee">Blog</a>
						</Link>
						<Link href="/">
							<a className="hoverEffect font-klee">About</a>
						</Link>
					</ul>
					<div>
						{isLoggedIn ? (
							<button
								onClick={handleLogOut}
								className="font-klee font-bold text-white px-5 py-2 bg-gray-900 cursor-pointer transition-all duration-300 hover:bg-red-500"
							>
								Log Out
							</button>
						) : (
							<Link href="/auth">
								<a className="font-klee font-bold text-white px-5 py-2 bg-gray-900 cursor-pointer transition-all duration-300 hover:bg-red-500">
									Login
								</a>
							</Link>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;

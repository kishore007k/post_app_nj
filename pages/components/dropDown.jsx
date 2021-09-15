import Link from "next/link";
import { useState } from "react";

const DropDown = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className="flex flex-col justify-center relative">
			<button
				onClick={() => setOpen(!open)}
				className="hoverEffect font-klee font-semibold text-skin-base text-lg cursor-pointer"
			>
				Create
			</button>
			<div
				className={`${
					open ? "block" : "hidden"
				} absolute top-[52px] w-40 text-center bg-white px-5 py-7 space-y-5 font-semibold text-skin-base text-lg cursor-pointer drop-shadow-md rounded-md`}
			>
				<div onClick={() => setOpen(false)} className="flex flex-col space-y-5">
					<Link href="/create/categories">
						<a className="hoverEffect font-klee">Categories</a>
					</Link>
					<Link href="/create/categories">
						<a className="hoverEffect font-klee">Tags</a>
					</Link>
					<Link href="/create/posts">
						<a className="hoverEffect font-klee">Posts</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default DropDown;

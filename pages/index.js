import Header from "./components/header";
import Hero from "./components/hero";
import PostGrid from "./post";

export default function Home() {
	return (
		<div>
			<Header />
			<div className="container mx-auto max-w-screen-xl pt-40 px-5">
				<Hero />
				<PostGrid />
			</div>
		</div>
	);
}

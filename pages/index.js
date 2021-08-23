import BlogGrid from "./components/blogGrid";
import Header from "./components/header";
import Hero from "./components/hero";

export default function Home() {
	return (
		<div>
			<Header />
			<div className="container mx-auto max-w-screen-xl pt-40 px-5">
				<Hero />
				<BlogGrid />
			</div>
		</div>
	);
}

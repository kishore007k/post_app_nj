import Hero from "./components/hero";
import PostGrid from "./post";
import Layout from "./components/layout";
// import ToggleSwitch from "./components/toggleSwitch";

export default function Home() {
	return (
		<div>
			<Layout>
				<div className="container mx-auto max-w-screen-xl pt-40 px-5">
					{/* <ToggleSwitch /> */}
					<Hero />
					<PostGrid />
				</div>
			</Layout>
		</div>
	);
}

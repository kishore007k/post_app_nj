import Header from "./components/header";
import Hero from "./components/hero";
import PostGrid from "./post";

import Head from "next/head";
import Layout from "./components/layout";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Blog Post</title>
				<link rel="shortcut icon" href="/logo.png" />
			</Head>
			<Layout>
				<div className="container mx-auto max-w-screen-xl pt-40 px-5">
					<Hero />
					<PostGrid />
				</div>
			</Layout>
		</div>
	);
}

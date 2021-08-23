import "../styles/global.css";
import "tailwindcss/tailwind.css";

import Head from "next/head";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
	const router = useRouter();

	console.log(router);

	return (
		<>
			<Head>
				<title>Blog Post</title>
				<link rel="shortcut icon" href="/logo.png" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

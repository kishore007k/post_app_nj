import "../styles/global.css";
import "tailwindcss/tailwind.css";

import Head from "next/head";

function MyApp({ Component, pageProps }) {
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

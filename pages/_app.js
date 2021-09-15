import "../styles/global.css";
import "tailwindcss/tailwind.css";

import Head from "next/head";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Head>
				<title>Blog Post</title>
				<link rel="shortcut icon" href="/logo.png" />
			</Head>
			<Component {...pageProps} />
		</Provider>
	);
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
	let pageProps = {};
	if (Component.getInitialProps) {
		pageProps = await Component.getInitialProps(ctx);
	}
	return { pageProps };
};

export default MyApp;

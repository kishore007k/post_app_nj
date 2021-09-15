import Hero from "./components/hero";
import PostGrid from "./post";
import Layout from "./components/layout";
import axios from "axios";
// import ToggleSwitch from "./components/toggleSwitch";

const backendUrl = process.env.BACKEND_URL;

const Home = ({ posts }) => {
	return (
		<Layout>
			<div className="container mx-auto max-w-screen-xl pt-40 px-5">
				{/* <ToggleSwitch /> */}
				<Hero />
				<PostGrid posts={posts} />
			</div>
		</Layout>
	);
};

export default Home;

export const getStaticProps = async () => {
	const res = await axios.get(`${backendUrl}/posts`);
	const data = await res.data.data;

	return {
		props: {
			posts: data,
		},
	};
};

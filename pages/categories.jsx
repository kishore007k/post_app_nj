import axios from "axios";
import Layout from "./components/layout";

const backendUrl = process.env.BACKEND_URL;

const Categories = ({ categories }) => {
	console.log(categories);
	return <Layout>Categories</Layout>;
};

export default Categories;

export const getStaticProps = async () => {
	const res = await axios.get(`${backendUrl}/categories`);
	const data = await res.data.data;

	return {
		props: {
			categories: data,
		},
	};
};

import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../redux/actions";
import Card from "../components/card";

const data = [
	{
		image:
			"https://blog-api.fintory.com/wp-content/uploads/2021/08/blog_laura-1024x684.jpg",
		category: "design",
		title: "the benefits of creating a design for your company",
		desc:
			"How a design system can solve many problems among designers and developers",
		slug: "the-benefits-of-creating-design",
		id: 1,
	},
	{
		image: "https://blog-api.fintory.com/wp-content/uploads/2021/07/image-30.png",
		category: "design",
		title: "the best tools for project managers",
		desc:
			"Don’t miss one of these powerful tools to bring your efficiency to the next level",
		slug: "the-best-tools-for-project-managers",
		id: 2,
	},
	{
		image:
			"https://blog-api.fintory.com/wp-content/uploads/2021/06/DSC09837-1024x683.jpg",
		category: "development",
		title: "Clean up your RSpec tests with ease",
		desc:
			"Use “subject” to explicitly define the value that is returned by its call",
		slug: "clean-up-your-rspec",
		id: 3,
	},
	{
		image:
			"https://blog-api.fintory.com/wp-content/uploads/2021/05/DSC02855-1-1024x683.jpg",
		category: "development",
		title: "Writing and implementing code efficiently",
		desc: "Why premature optimization sometimes makes sense",
		slug: "writing-and-implementing-code-efficiently",
		id: 4,
	},
	{
		image:
			"https://blog-api.fintory.com/wp-content/uploads/2021/05/DSC09549-1024x683.jpg",
		category: "design",
		title:
			"The pros and cons of no-code software development. The simple way to code?",
		desc: "Read all about the pros and cons of no-code software development",
		slug: "the-pros-and-cons",
		id: 5,
	},
	{
		image:
			"https://blog-api.fintory.com/wp-content/uploads/2021/05/DSC09260-1024x683.jpg",
		category: "design",
		title: "How to become an outstanding UX/UI designer?",
		desc:
			"If you are dreaming to become a top-notch UX/UI designer, check out these 7 most important qualities",
		slug: "how-to-become-an-outstanding-ui-ux-designer",
		id: 6,
	},
];

const PostGrid = () => {
	const backendUrl = process.env.BACKEND_URL;
	const [posts, setPosts] = useState([]);
	const dispatch = useDispatch();

	useEffect(async () => {
		const posts = await axios
			.get(`${backendUrl}/posts`)
			.then((res) => {
				dispatch(getAllPosts(res.data));
				setPosts(res.data.data);
			})
			.catch((err) => console.log(err));
		return posts;
	}, []);

	return (
		<>
			<div className="grid grid-cols-4 gap-5 pb-20">
				{data.map((item, index) => (
					<Card
						key={index}
						title={item.title}
						desc={item.desc}
						image={item.image}
						category={item.category}
						slug={item.slug}
						id={item.id}
					/>
				))}
			</div>
			{posts !== [] && posts.map((post) => <div>{post.title}</div>)}
		</>
	);
};

export default PostGrid;

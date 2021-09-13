import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../../redux/actions";
import Card from "../components/card";

const backendUrl = process.env.BACKEND_URL;

const PostGrid = () => {
	const [posts, setPosts] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const posts = axios
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
				{posts ? (
					posts.map((post) => (
						<Card
							key={post._id}
							title={post.title}
							desc={post.desc}
							image={post.pImage}
							category={post.category}
							slug={post.slug}
							id={post._id}
						/>
					))
				) : (
					<div className="grid grid-cols-1 pb-20">Loading...</div>
				)}
			</div>
		</>
	);
};

export default PostGrid;

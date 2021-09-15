import Card from "../components/card";

const PostGrid = ({ posts }) => {
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

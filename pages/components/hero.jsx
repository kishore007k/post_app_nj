import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
	const [searchInput, setSearchInput] = useState("");

	return (
		<div className="space-y-10">
			<h1 className="text-center font-extrabold text-skin-base text-7xl font-sourceCodePro">
				Blog
			</h1>
			<p className="text-center max-w-screen-md mx-auto font-normal text-lg font-inter">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam inventore
				aspernatur nesciunt blanditiis dolor molestias dolorem.
			</p>
			<div className="relative max-w-lg mx-auto">
				<span className="absolute top-2 left-2">
					<AiOutlineSearch size="25px" color={"var(--darkGray)"} />
				</span>
				<input
					type="text"
					className="border border-border p-2 rounded-lg w-full pl-11 font-medium font-border font-sourceCodePro focus:outline-none focus:placeholder-transparent"
					placeholder="Search for articles"
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
			</div>
		</div>
	);
};

export default Hero;

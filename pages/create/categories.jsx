import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory, createTag } from "../../redux/actions";
import Layout from "../components/layout";
import withAuth from "../components/withAuth";
import { IoClose } from "react-icons/io5";

const CreateCategories = () => {
	const [category, setCategory] = useState("");
	const [tag, setTag] = useState("");
	const [token, setToken] = useState("");
	const [exist, setExist] = useState(false);

	const dispatch = useDispatch();
	const backendUrl = process.env.BACKEND_URL;

	useEffect(() => {
		setToken(Cookies.get("token"));
	}, []);

	const config = {
		headers: {
			"Access-Control-Allow-Origin": "*",
			Authorization: `Bearer ${token}`,
		},
	};

	const handleCreateCategory = async () => {
		const response = await axios
			.post(
				`${backendUrl}/categories/create`,
				{
					name: category,
				},
				config
			)
			.then((res) => {
				dispatch(createCategory(res.data));
				if (res.data.message) {
					return setExist(true);
				}
				return setExist(false);
			})
			.catch((err) => console.log(err));
		return response;
	};

	const handleCreateTag = async () => {
		const response = await axios
			.post(
				`${backendUrl}/tags/create`,
				{
					name: tag,
				},
				config
			)
			.then((res) => {
				dispatch(createTag(res.data));
				if (res.data.message) {
					return setExist(true);
				}
				return setExist(false);
			})
			.catch((err) => console.log(err));
		return response;
	};

	setTimeout(() => {
		if (exist) {
			return setExist(false);
		}
	}, [5000]);

	return (
		<Layout>
			<div className="relative container max-w-screen-xl mx-auto pt-40">
				<div
					className={`absolute right-0 mb-20 bg-gray-50 px-3 py-2 rounded-md text-gray-800 drop-shadow-lg text-base font-sourceCodePro font-semibold transition-all flex items-center ${
						exist
							? "block animate-notificationOpen"
							: "hidden animate-notificationClose"
					}`}
				>
					<span>Already Exists</span>
					<button onClick={() => setExist(false)}>
						<IoClose className="w-5 h-5 text-gray-600 ml-5 cursor-pointer" />
					</button>
				</div>
				<div className="flex py-60">
					<div className="block w-4/12 mx-auto mb-10 space-y-8">
						<div className="relative">
							<input
								id="category"
								name="category"
								type="text"
								className="peer h-10 w-full border-b-2 border-blue-200 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-400 pl-2 font-sourceCodePro lowercase"
								placeholder="Create a Category..."
								onChange={(e) => setCategory(e.target.value.toUpperCase())}
								value={category}
							/>
							<label
								htmlFor="category"
								className="absolute left-2 -top-6 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm font-sourceCodePro"
							>
								Category
							</label>
						</div>
						<div className="flex justify-center">
							<button
								onClick={handleCreateCategory}
								className="font-inter font-normal max-w-[max-content] text-white px-5 py-2 bg-gray-900 cursor-pointer transition-all duration-300 hover:bg-red-500 drop-shadow-md hover:drop-shadow-lg"
							>
								Create Category
							</button>
						</div>
					</div>
					<div className="block w-4/12 mx-auto mb-10 space-y-8">
						<div className="relative">
							<input
								id="tag"
								name="tag"
								type="text"
								className="peer h-10 w-full border-b-2 border-blue-200 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-400 pl-2 font-sourceCodePro lowercase"
								placeholder="Create a Tag..."
								onChange={(e) => setTag(e.target.value.toUpperCase())}
								value={tag}
							/>
							<label
								htmlFor="tag"
								className="absolute left-2 -top-6 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-gray-600 peer-focus:text-sm font-sourceCodePro"
							>
								Tag
							</label>
						</div>
						<div className="flex justify-center">
							<button
								onClick={handleCreateTag}
								className="font-inter font-normal max-w-[max-content] text-white px-5 py-2 bg-gray-900 cursor-pointer transition-all duration-300 hover:bg-red-500 drop-shadow-md hover:drop-shadow-lg"
							>
								Create Tag
							</button>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default withAuth(CreateCategories);

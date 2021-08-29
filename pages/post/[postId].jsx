import { useRouter } from "next/router";
import Header from "../components/header";
import { ImQuotesLeft } from "react-icons/im";

const PostDetails = () => {
	const router = useRouter();
	const postId = router.query.postId;

	return (
		<div>
			<Header />
			<div className="container max-w-screen-xl mx-auto pt-60 flex flex-col items-center space-y-14">
				<h4 className="text-center uppercase font-sourceCodePro font-bold text-lg border-2 border-black px-2 tracking-widest">
					motivation
				</h4>

				<h1 className="font-inter text-skin-base font-bold text-6xl">
					The Secret to Find a True Happiness
				</h1>

				<div className="flex items-center">
					<p className="text-gray-500 font-medium text-sm uppercase tracking-wider">
						by <span className="text-gray-900 font-bold">josiah jones</span>
					</p>
					<span className="px-5 text-gray-500">&#47;</span>
					<p className="uppercase text-sm text-gray-500 tracking-wider">
						july 20, 2020
					</p>
					<span className="px-5 text-gray-500">&#47;</span>
					<p className="uppercase text-sm text-gray-500 tracking-wider">
						2 min read
					</p>
				</div>

				<div>
					<p className="text-gray-800 font-inter text-base tracking-wide leading-8">
						<span className="float-left text-5xl font-rampart font-semibold pr-2 pt-2">
							L
						</span>
						orem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quisquam
						earum maiores quos, voluptas facere? Quisquam molestiae quasi minima
						facilis explicabo sequi nemo voluptatum distinctio, animi assumenda odit
						officiis est! Aut maxime laudantium aperiam vero! Corporis quibusdam illo
						ex fugiat officiis tempora repellat et necessitatibus iure maxime dolorum
						earum expedita quam explicabo, repudiandae odio rerum, vitae vero minima
						adipisci itaque. Nihil eius aspernatur aut, autem sunt maiores, enim,
						provident dicta ad suscipit vero aliquam voluptas quo fugit repellat sint
						vel voluptatum? Magni a architecto nisi reprehenderit doloribus modi
						vitae! Nulla.
					</p>
				</div>

				<div className="space-y-5">
					<div className="flex items-center justify-between">
						<ImQuotesLeft color="var(--border)" size={35} className="mr-5" />
						<blockquote className="text-gray-600 font-inter font-medium text-xl tracking-wide">
							People Comes From Living in the Present Moment,
							<br />
							Where you can Take Action and Create The Future
						</blockquote>
					</div>
					<div>
						<cite className="uppercase text-gray-700 font-inter font-light text-sm pl-14">
							steve roberts
						</cite>
					</div>
				</div>

				<div className="flex flex-col items-center space-y-5">
					<div className="w-full">
						<img src="/pic.jpg" alt="image" className="object-cover" />
					</div>
					<span className="uppercase font-inter font-medium text-xs text-gray-600">
						people with smile
					</span>
				</div>

				<div className="space-y-14">
					<p className="text-gray-700 text-left font-inter font-light text-lg tracking-wide leading-7">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem quod
						necessitatibus vero, vel voluptatum provident aspernatur! Quidem veniam
						excepturi fugit, laboriosam, maiores natus cumque facilis nemo odio sit
						similique ratione! Earum tempora perferendis facilis at, officia magni
						obcaecati voluptatibus iusto soluta laudantium neque sapiente culpa
						incidunt, quibusdam quis fugit quia quas. Blanditiis voluptatum iste
						molestiae voluptatem, omnis excepturi fuga eum?
					</p>

					<h2 className="text-2xl text-gray-800 font-semibold font-inter tracking-wide">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In, enim.
					</h2>

					<p className="text-gray-700 text-left font-inter font-light text-lg tracking-wide leading-7">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eaque
						sit, doloremque nostrum explicabo cupiditate accusantium impedit tenetur
						voluptate deserunt ullam nisi perferendis unde necessitatibus pariatur
						facere praesentium repellat inventore.
					</p>
				</div>

				<div className="w-full flex flex-col items-center pb-40 space-y-10">
					<div className="flex w-full relative">
						<span className="w-full h-px bg-gray-300 absolute top-1/2" />
						<div className="w-20 h-20 mx-auto bg-white z-10 userImage relative">
							<img
								src="/avatar.jpg"
								alt="avatar"
								className="w-full h-full object-cover rounded-full object-center"
							/>
						</div>
					</div>

					<div className="space-y-5">
						<h4 className="text-center font-inter text-sm uppercase font-medium tracking-wider text-gray-800">
							Josiah Jones
						</h4>
						<p className="text-center capitalize text-sm font-inter font-medium tracking-wider text-gray-500">
							flim maker at red rocks church
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostDetails;

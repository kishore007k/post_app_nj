const Header = () => {
	return (
		<nav className="py-5 border-b border-lightBorder filter bg-white bg-opacity-70 fixed w-screen z-10 backdrop-filter backdrop-blur-md backdrop-saturate-150">
			<div className="container mx-auto max-w-screen-xl flex justify-between items-center">
				<div>
					<h4 className="font-rampart font-bold text-2xl cursor-pointer">
						K-Blog📝
					</h4>
				</div>
				<div className="flex items-center">
					<ul className="flex justify-center space-x-10 mr-12 font-semibold text-black text-lg cursor-pointer relative">
						<li className="hoverEffect font-klee">Services</li>
						<li className="hoverEffect font-klee">Case Studies</li>
						<li className="hoverEffect font-klee">Work</li>
						<li className="hoverEffect font-klee">Blog</li>
						<li className="hoverEffect font-klee">About</li>
					</ul>
					<div>
						<button className="font-klee font-semibold px-5 py-3 bg-gray-900 text-white cursor-pointer scale-100 transition-all duration-300 hover:scale-105">
							Contact Us
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;

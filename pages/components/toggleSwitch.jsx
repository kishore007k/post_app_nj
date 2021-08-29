const ToggleSwitch = () => {
	return (
		<div className="flex justify-end items-center space-x-2">
			<span className="text-sm text-gray-800">Light</span>
			<div>
				<input type="checkbox" id="toggle" className="hidden" />
				<label htmlFor="toggle">
					<div className="w-9 h-5 flex items-center bg-gray-300 rounded-full p-1">
						<div className="toggle-dot transform ease-in-out duration-500 w-4 h-4 bg-white rounded-full shadow-md" />
					</div>
				</label>
			</div>
			<span className="text-sm text-gray-400">Dark</span>
		</div>
	);
};

export default ToggleSwitch;

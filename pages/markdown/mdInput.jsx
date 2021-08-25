import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

import Layout from "../components/layout";

const mdParser = new MarkdownIt(/* Markdown-it options */);

const handleEditorChange = ({ html, text }) => {
	console.log("handleEditorChange", html, text);
};

const MdInput = (props) => {
	return (
		<Layout>
			<div className="container mx-auto max-w-screen-lg pt-40">
				<MdEditor
					style={{ height: "700px" }}
					renderHTML={(text) => mdParser.render(text)}
					onChange={handleEditorChange}
				/>
			</div>
		</Layout>
	);
};

export default MdInput;

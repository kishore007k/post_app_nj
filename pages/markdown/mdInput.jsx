import dynamic from "next/dynamic";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import Layout from "../components/layout";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
	ssr: false,
});

const MdInput = (props) => {
	return (
		<Layout>
			<div className="container mx-auto max-w-screen-lg pt-40">
				<MdEditor
					style={{ height: "700px" }}
					renderHTML={(text) => <ReactMarkdown source={text} />}
				/>
			</div>
		</Layout>
	);
};

export default MdInput;

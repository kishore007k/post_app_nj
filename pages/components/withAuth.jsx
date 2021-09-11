import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const backendUrl = process.env.BACKEND_URL;

const verifyToken = ({ id, secret }) => {
	const response = axios
		.get(`${backendUrl}/users/singleUser/${id}`)
		.then((res) => {
			if (res.data.data.secretKey !== secret) {
				return null;
			}
			return res.data.data;
		})
		.catch((err) => console.log(err));
	return response;
};

const withAuth = (WrapperComponent) => {
	return (props) => {
		if (typeof window !== "undefined") {
			const router = useRouter();
			const token = Cookies.get("token");

			if (!token) {
				router.replace("/auth");
				return null;
			}

			return <WrapperComponent {...props} />;
		}
		return null;
	};
};

export default withAuth;

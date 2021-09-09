import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const backendUrl = process.env.BACKEND_URL;

const verifyToken = ({ token }) => {
	const user = JSON.parse(Cookies.get("userData"));
	const data = axios
		.get(`${backendUrl}/users/singleUser/${user._id}`)
		.then((res) => {
			if (!res) {
				return false;
			}
			const userToken = res.data.token;

			if (userToken !== token) {
				return true;
			}

			return true;
		})
		.catch((err) => console.log(err));
	console.log(data);
	return data;
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

			verifyToken({ token });

			return <WrapperComponent {...props} />;
		}
		return null;
	};
};

export default withAuth;

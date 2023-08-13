import { Stack } from "expo-router";
import App from "./index";

const Layout = () => {
	return (
		<Stack>
			<App />
		</Stack>
	);
};

export default Layout;

/* const Layout = Stack({
	Home: {
		screen: App,
		path: "/",
	},
	About: {
		screen: AboutScreen,
		path: "/about",
	},
}); */

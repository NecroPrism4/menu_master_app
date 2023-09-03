import { Slot } from "expo-router";

export default function HomeLayout() {
	return (
		<>
			<Slot></Slot>
		</>
	);
}

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

/* <>
			<Header />
			<Slot></Slot>
		</> */

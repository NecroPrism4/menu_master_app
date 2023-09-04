import { Stack } from "expo-router";
import { View } from "react-native";

export default function HomeLayout() {
	return (
		<Stack
			screenOptions={{
				title: "My App",
				headerBackground: () => <View style={{ backgroundColor: "red" }} />,
			}}
		/>
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

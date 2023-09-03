import { Link, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const App = () => {
	const handlePress = () => {
		router.replace("/(login)/register");
	};

	return (
		<View>
			<Text>Hello World!</Text>

			<TouchableOpacity onPress={handlePress}>
				<Text>using router</Text>
			</TouchableOpacity>

			<Link href={"/users/1221212"} asChild>
				<Text>Using link</Text>
			</Link>

			<Link href={"/home/"} asChild>
				<Text>Home</Text>
			</Link>
		</View>
	);
};

export default App;

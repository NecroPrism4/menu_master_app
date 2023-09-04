import { Link, router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Login = () => {
	const handlePress = () => {
		router.replace("/home/users/1");
	};

	return (
		<SafeAreaView>
			<View>
				<Text>Hello World!</Text>

				<TouchableOpacity onPress={handlePress}>
					<Text>using router</Text>
				</TouchableOpacity>

				<Link href={"/home/"} asChild>
					<Text>Using link</Text>
				</Link>

				<Link href={"/home/"} asChild>
					<Text>Home</Text>
				</Link>
			</View>
		</SafeAreaView>
	);
};

export default Login;

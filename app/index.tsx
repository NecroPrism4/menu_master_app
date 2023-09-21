import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import Constants from "expo-constants";
import React from "react";
import { Link } from "expo-router";
import { router } from "expo-router";

const index = () => {
	const handlePress = () => {
		router.replace("/home/users/1");
	};

	return (
		<SafeAreaView>
			<View style={{ marginTop: Constants.statusBarHeight }}>
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
			</View>
		</SafeAreaView>
	);
};

export default index;

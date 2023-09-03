import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function user() {
	const { id } = useLocalSearchParams();

	return (
		<View>
			<Text>{id}</Text>
		</View>
	);
}

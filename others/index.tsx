import React, { useCallback, useEffect, useState } from "react";
import { Text, View, StyleSheet, Animated } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import * as Font from "expo-font";
import AnimatedSplash from "react-native-animated-splash-screen";
import Login from "../src/screens/login/Login";

// Keep the splash screen visible while we fetch resources
/* SplashScreen.preventAutoHideAsync(); */

const App = () => {
	const [appIsReady, setAppIsReady] = useState(false);
	const fadeAnim = new Animated.Value(0);
	const User = Math.random() < 0.5;

	useEffect(() => {
		async function prepare() {
			try {
				// Pre-load fonts, make any API calls you need to do here
				await Font.loadAsync(Entypo.font);
				// Artificially delay for two seconds to simulate a slow loading
				// experience. Please remove this if you copy and paste the code!
				await new Promise((resolve) => setTimeout(resolve, 2000));
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setAppIsReady(true);
				Animated.timing(fadeAnim, {
					toValue: 1,
					duration: 1000, // Animation duration in milliseconds
					useNativeDriver: true, // Use native driver for better performance
				}).start();
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			/* await SplashScreen.hideAsync(); */
		}
	}, [appIsReady]);

	return (
		<AnimatedSplash
			translucent={false}
			isLoaded={appIsReady}
			logoImage={require("../assets/images/splash-screen.png")}
			backgroundColor={"#262626"}
			logoHeight={150}
			logoWidth={150}
		>
			{User ? <Login /> : <Text>Logged In</Text>}
		</AnimatedSplash>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

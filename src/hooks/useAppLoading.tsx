import { useEffect, useMemo } from "react";
import { Platform } from "react-native";

export default function App() {
	const isWeb = useMemo(() => Platform.OS === "web", []);

	useEffect(() => {
		if (isWeb)
			document.body.style.cssText = `heitght: ${window.innerHeight * 0.01}px;`;
	}, []);
}

import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider style={{ flex: 1 }} edges={["top", "left", "right"]}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}

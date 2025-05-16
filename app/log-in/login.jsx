import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Login() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>LOGIN SCREEN</Text>
      <Button title="Volver" onPress={() => router.back()}></Button>
    </View>
  );
}

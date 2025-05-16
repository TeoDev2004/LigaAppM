/*import { useRouter } from "expo-router";*/
import { useAudioPlayer } from "expo-audio";
import React from "react";
import { Button, StyleSheet, View } from "react-native";

const audioSource = require("../../assets/sounds/PokemonIndex.mp3");

export default function Login() {
  /*const router = useRouter();
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
  );*/
  const player = useAudioPlayer(audioSource);

  // player.ready es true cuando el audio está cargado y listo para usar
  const canPlay = player.ready;

  return (
    <View style={styles.container}>
      <Button
        title="Play Sound"
        onPress={() => player.play()}
        //disabled={!canPlay}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 10,
  },
});

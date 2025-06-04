import { useAudioPlayer } from "expo-audio";
import React, { useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";

const audioSource = require("../../assets/sounds/PokemonIndex.mp3");

export default function Login() {
  const player = useAudioPlayer(audioSource);

  // Este useEffect se ejecutará cuando player.ready cambie a true
  useEffect(() => {
    if (player.ready) {
      player.play();
    }
  }, [player.ready]);

  return (
    <View style={styles.container}>
      <Button title="Play Sound" onPress={() => player.play()} />
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

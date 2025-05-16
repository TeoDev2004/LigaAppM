import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Button, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Index() {
  /*const player = useAudioPlayer("../assets/sounds/PokemonIndex.mp3");

  useEffect(() => {
    player.setIsLooping(true);
    player.setVolume(0.4);
    player.play();

    return () => {
      player.stop();
      player.unload();
    };
  }, [player]);*/
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    ChillChripFree: require("../assets/fonts/ChillChripFree.otf"),
  });
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FEF8E5",
      }}
    >
      <Animatable.Text
        animation="fadeInDownBig"
        duration={1500}
        style={styles.titulo}
      >
        BIENVENIDOS
      </Animatable.Text>
      <Image
        source={require("../assets/gifs/bulbasaurinicio.gif")}
        style={{ width: 300, height: 300 }}
        contentFit="contain"
      />
      <Button
        title="ir al login"
        onPress={() => router.push("/log-in/login")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 48,
    fontFamily: "ChillChripFree",
    color: "#92EACC",
    textShadowRadius: 10,
    textShadowColor: "#216366",
    textShadowOffset: { width: 0, height: 0 },
    textAlign: "center",
    marginBottom: 20,
    marginTop: -100,
    marginBottom: 100,
    padding: 10,
  },
});

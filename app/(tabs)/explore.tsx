import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/projeto.png")}
          style={styles.projetoLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Projetos</ThemedText>
      </ThemedView>
      <ThemedText>Projetos mais relevantes que fiz</ThemedText>
      <Collapsible title="Java">
        <ThemedText>
          Projeto que faz uso de bastante orientação a objetos no qual aprendi
          varios conteudos muito relevantes para meu proprio desenvolvimento:{" "}
        </ThemedText>
      </Collapsible>

      <Collapsible title="TIAW">
        <ThemedText>
          Projeto usando tecnologias atuais como React Native e Expo Go, tambem
          usamos a biblioteca GlueStack usada principalmente para UI:{" "}
        </ThemedText>
      </Collapsible>

      <Collapsible title="Extensão ll">
        <ThemedText>
          Projeto no qual tive que desenvolver um jogo em C, ultilizando uma
          biblioteca chamada Raylib, e apesar da limitação imposta pela
          linguagem, achei bastante interessante:{" "}
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    backgroundColor: "transparent",
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },

  projetoLogo: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: "static",
  },
});

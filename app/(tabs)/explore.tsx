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
        <Ionicons size={310} name="code-slash" style={styles.headerImage} />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Curso</ThemedText>
      </ThemedView>
      <ThemedText>
        Faço curso de analise e desenvolvimento de sistemas
      </ThemedText>
      <Collapsible title="Sobre as telas">
        <ThemedText>
          Esse app tem três telas:{" "}
          <ThemedText type="defaultSemiBold">
            Pode ver informações sobre minha pessoa
          </ThemedText>{" "}
          e{" "}
          <ThemedText type="defaultSemiBold">
            Sobre o melhor time do Brasil
          </ThemedText>
        </ThemedText>
        <ThemedText>
          E essa tela <ThemedText type="defaultSemiBold"></ThemedText>, onde
          verá minhas proeficiencias
        </ThemedText>
      </Collapsible>
      <Collapsible title="Curso de desevolvimento de jogos">
        <ThemedText>
          Start <ThemedText type="defaultSemiBold">GameDev</ThemedText> com o
          professor Wenes Soares, onde aprendi a usar a engine{" "}
          <ThemedText type="defaultSemiBold">Unity</ThemedText>, desenvolvendo
          um jogo 2D.
        </ThemedText>
      </Collapsible>
      <Collapsible title="Game Dev">
        <ThemedText>
          Onde fiz o curso{" "}
          <ThemedText type="defaultSemiBold">Start-GameDev</ThemedText> conteudo
          trabalhado <ThemedText type="defaultSemiBold">Unity</ThemedText>{" "}
          mecanicas de pesca, plantação, combate e rolamento
        </ThemedText>
        {/* <Image
          source={require("@/assets/images/react-logo.png")}
          style={{ alignSelf: "center" }}
        /> */}
        <ExternalLink href="https://hotmart.com/pt-br/marketplace/produtos/start-gamedev/P56252308L">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
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
  backgroundColor: "transparent",
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

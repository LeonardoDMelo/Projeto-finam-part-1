import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Tabs } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/iftmLogo.jpg")}
          style={styles.iftmLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem-vindo!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Nome: Leonardo Melo</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">Estutande do IFTM</ThemedText>{" "}
          <ThemedText type="defaultSemiBold">
            {/* {Platform.select({ ios: "cmd + d", android: "cmd + m" })} */}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Curso: ADS</ThemedText>
        <ThemedText>
          Faço o curso de analise e desenvolvimento de sistemas para me tornar
          um programador
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Obetivos: Sempre melhorar</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">
            {" "}
            Me tornar um eximio programador
          </ThemedText>{" "}
          ingressar no mercado de desenvolvimento de games{" "}
          <ThemedText type="defaultSemiBold">Unity</ThemedText> ou Unreal. Seria
          a realização de um sonho{" "}
          <ThemedText type="defaultSemiBold">e vou conseguir</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">realizarei esse sonho</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );

  <View style={{ backgroundColor: "#FFFFFF" }}>
    <Tabs />
  </View>;
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    backgroundColor: "transparent",
    gap: 8,
    marginBottom: 8,
  },
  iftmLogo: {
    height: 300,
    width: 400,
    bottom: 0,
    left: 0,
    position: "static",
  },
});

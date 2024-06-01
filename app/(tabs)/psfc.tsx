import { Image, StyleSheet } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/spfc.png")}
          style={styles.pscLogo}
        />
      }
      backgroundColor="#2bacda"
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">PSFC</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Payssandu</ThemedText>
        <ThemedText>O melhor time do Brasil.</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
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
  pscLogo: {
    height: 250,
    width: 400,
    bottom: 0,
    left: 0,
    position: "static",
  },
});

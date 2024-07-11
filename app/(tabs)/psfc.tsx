import { Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabThreeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/iftmLogo.jpg")}
          style={styles.pscLogo}
        />
      }
      backgroundColor="#000"
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Itinerário Formativo</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Hotel</ThemedText>
        <ThemedText>
          Já trabalhei como assitente administrativo no hotel Dan Inn Uberaba,
          Tive bastante contato com publico pois fazia reservas de quartos e
          salões.
        </ThemedText>
        <ThemedText type="subtitle">CodeKids</ThemedText>
        <ThemedText>
          Tambem atuei em uma StartUp que vendia curso de robotica para
          crianças, ensinando desde um regador automatico, até um carrinho que
          segue uma faixa
        </ThemedText>
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

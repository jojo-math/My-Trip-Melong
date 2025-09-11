import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Découvrez mon merveilleux voyage",
          headerStyle: styles.header,
          headerTintColor: "#FFF", // couleur du texte et icônes
          headerTitleStyle: styles.headerTitle,
          headerShadowVisible: false, // supprime la barre grise par défaut
        }}
      />
    </Stack>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2E7D32", // Vert nature cohérent
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});

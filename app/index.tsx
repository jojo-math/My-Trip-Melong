import { Image } from "expo-image";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const imgSlide1 = require("@/assets/images/route-mbouda.jpg");
const imgSlide2 = require("@/assets/images/marche-mbouda.webp");
const imgSlide3 = require("@/assets/images/vie-village.webp");

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Contenu principal scrollable */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Galerie horizontale */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={240} // Largeur de l'image + marge
          snapToAlignment="start"
          decelerationRate="fast"
          contentContainerStyle={styles.imageRow}
        >
          <Image source={imgSlide1} style={styles.image} />
          <Image source={imgSlide2} style={styles.image} />
          <Image source={imgSlide3} style={styles.image} />
        </ScrollView>
        {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>🌍 Mon voyage à Mbouda</Text>
      </View>

        {/* Titre */}
        <Text style={styles.title}>
          Escapade à Mbouda : Au cœur des traditions et des paysages
        </Text>

        {/* Faits marquants */}
        <View style={styles.card}>
          <Text style={styles.cardText}>
            🌄 Mbouda est nichée au cœur de l’Ouest Cameroun, une région réputée
            pour ses collines verdoyantes et son climat frais. Le trajet vers le
            village est déjà une expérience en soi : on traverse des routes
            bordées de champs de maïs, de bananeraies et de plantations de café.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardText}>
            🛍️ Le marché de Mbouda est l’un des plus animés de la région. On y
            découvre l’authenticité du terroir : tubercules, fruits exotiques,
            épices locales, mais aussi du maïs grillé et des beignets haricot.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardText}>
            👨‍👩‍👧‍👦 Le voyage à Mbouda est aussi un retour aux origines. Les
            familles accueillent toujours les visiteurs avec chaleur et
            simplicité. L’hospitalité bamiléké renforce le sentiment
            d’appartenance et de connexion aux racines.
          </Text>
        </View>
      </ScrollView>

      {/* Footer fixe */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          ©2025 My Trip Melong – Tous droits réservés
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9FAFB" },

  header: {
    height: 60,
    maxWidth: 600,
    justifyContent: "center",
    alignItems: "center",
    
    backgroundColor: "#2E7D32",
    elevation: 3,
    borderRadius: 12,
    margin: 'auto',
    paddingHorizontal: 16,
    marginTop:'auto'
  },
  appName: { fontSize: 18, fontWeight: "bold", color: "#FFF" },

  scrollContent: { paddingBottom: 100 },

  imageRow: { paddingHorizontal: 16, gap: 16, marginVertical: 16 },
  image: {
    height: 200,
    width: 300,
    borderRadius: 16,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
    color: "#212121",
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  cardText: { fontSize: 16, lineHeight: 22, color: "#424242" },

  footer: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F57C00",
  },
  footerText: { color: "#FFF", fontSize: 14 },
});

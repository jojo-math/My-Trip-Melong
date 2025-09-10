import { Image } from "expo-image";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64,
};
const imgSlide1 = require("@/assets/images/icon.png")
export default function Index() {
  return (
    <SafeAreaView style={{flex:1}}>
      <View
      style={{
        flex:1,
        alignContent:"center"
      }}
    >
      <ScrollView snapToInterval={200} decelerationRate="fast" showsVerticalScrollIndicator={false}>
      <ScrollView horizontal snapToInterval={240} decelerationRate="fast" showsHorizontalScrollIndicator={false} contentContainerStyle={{alignItems:'center'}} style={{height:300, backgroundColor:'rgba(61, 204, 25, 1)', opacity:0.75}}>
        <Image source={imgSlide1} style={customizer.sizeImage}></Image>
        <Image source={imgSlide1} style={customizer.sizeImage}></Image>
        <Image source={imgSlide1} style={customizer.sizeImage}></Image>
        <Image source={imgSlide1} style={customizer.sizeImage}></Image>
        <Image source={imgSlide1} style={customizer.sizeImage}></Image>
        <Image source={imgSlide1} style={customizer.sizeImage}></Image>
        <Image source={imgSlide1} style={customizer.sizeImage}></Image>
        <Image source={imgSlide1} style={customizer.sizeImage}></Image>
      </ScrollView>
        <Text style={customizer.titleMain}>Escapade à Mbouda : Au cœur des traditions et des paysages</Text>
        <Text style={customizer.styleText}>Mbouda est nichée au cœur de l’Ouest Cameroun, une région réputée pour ses collines verdoyantes et son climat frais. Le trajet vers le village est déjà une expérience en soi : on traverse des routes bordées de champs de maïs, de bananeraies et de plantations de café. Les montagnes qui entourent la ville offrent des panoramas spectaculaires, parfaits pour les amoureux de la nature et de la photographie.</Text>
        <Text style={customizer.styleText}>Le marché de Mbouda est l’un des plus animés de la région. On y découvre l’authenticité du terroir : tubercules (macabo, taro, igname), fruits exotiques, épices locales, mais aussi des mets préparés comme le maïs grillé ou les beignets haricot. L’ambiance est vibrante : les commerçants interpellent les passants, les couleurs éclatent à chaque étal et les échanges reflètent l’esprit communautaire bamiléké. C’est une véritable immersion dans la culture locale.</Text>
        <Text style={customizer.styleText}>Le voyage à Mbouda ne se limite pas aux paysages et au marché : il est aussi un retour aux origines. Dans les villages, les familles accueillent toujours les visiteurs avec chaleur et simplicité. Les traditions se vivent au quotidien : partage des repas, veillées animées, et transmission des histoires familiales. L’hospitalité bamiléké renforce le sentiment d’appartenance et de connexion aux racines, une expérience profondément humaine et mémorable.</Text>
        
      </ScrollView>
      <Text style={customizer.footer}>Ceci est la fin</Text>
    </View>
    </SafeAreaView>
    
  );
}

const customizer = StyleSheet.create({
  sizeImage:{
    height:200,
    width:400,
    borderRadius:20,
    marginLeft:40,
    borderColor:'gray',
    borderWidth: 2,
    shadowOffset: {width: 0, height:6},
    shadowColor: 'black',
    shadowRadius: 16,
    shadowOpacity:0.3
  },
  styleText:{
    borderStyle:'solid',
    borderColor:'black',
    borderRadius:24,
    fontSize:20,
    margin:20,
    backgroundColor:'rgba(199, 231, 203, 1)',
    shadowOffset: {width: 0, height:0},
    shadowColor: 'black',
    shadowRadius: 16,
    shadowOpacity:0.3,
    padding:20
  },
  titleMain:{
    zIndex: 99,
    marginTop: -20,
    backgroundColor:'rgb(230,90,20)',
    textAlign:'center',
    maxWidth:400,
    minHeight:70,
    alignItems:'center',
    flex:1,
    alignSelf:'center',
    padding:12,
    fontSize:28,
    borderRadius:20,
    shadowOffset: {width: 0, height:0},
    shadowColor: 'black',
    shadowRadius: 16,
    shadowOpacity:0.7,
  },
  footer:{
    
  }
})


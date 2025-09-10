import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{title:"Découvrez mon merveilleux voyage", headerStyle:{backgroundColor:'rgba(172, 70, 66, 1)'}}}></Stack.Screen>
    </Stack> 
    );
}

const styleHome = StyleSheet.create({
  header:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});

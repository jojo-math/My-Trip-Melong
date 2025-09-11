import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";



export default function Index() {
  return (
    <View style={styles.size}>
            <Link href={"/views/trip"} style={styles.links}>Cliquez pour découvrir mon expérience de voyage...</Link>
        </View>
    
  );
}

const styles = StyleSheet.create({
    links:{
        flex: 1,
        height: 60,
        maxWidth: 600,
        alignItems: "center",
        alignSelf:'center',
        backgroundColor: "#2E7D32",
        elevation: 3,
        borderRadius: 12,
        paddingHorizontal: 32,
        paddingVertical:8,
        fontSize:20,
        color:'white',
        marginTop:'auto',
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
    },
    size:{
        margin:'auto'
    }
});

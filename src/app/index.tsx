import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  function handleLista() {
    router.push("./lista");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/lista.jpg")}
        style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 20 }}
      />
      <Text style={styles.title}>Bem vindo ao caju lista de compras</Text>
      <TouchableOpacity style={styles.botaoEntrar} onPress={handleLista}>
        <Text style={styles.titleBotao}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  botaoEntrar: {
    width: "100%",
    height: 50,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 20,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  titleBotao: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

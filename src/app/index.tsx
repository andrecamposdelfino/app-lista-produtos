import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function Index() {
  function handleLista() {
    router.push("./lista");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo ao Caju</Text>
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
  },

  botaoEntrar: {
    width: 150,
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

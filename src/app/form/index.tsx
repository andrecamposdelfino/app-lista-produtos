import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useState } from "react";

import { Input } from "@/components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [nome, setNome] = useState("");

  const salvarDados = async () => {
    if (!nome.trim()) {
      Alert.alert("Por favor, insira um nome válido.");
      return;
    }

    try {
      // Busca a lista existente
      const dados = await AsyncStorage.getItem("@produtos");
      let produtos = [];

      if (dados) {
        try {
          const parsed = JSON.parse(dados);
          // Verifica se é um array, se não for, cria um novo
          if (Array.isArray(parsed)) {
            produtos = parsed;
          } else {
            // Se for um objeto único, converte para array
            produtos = [parsed];
          }
        } catch (parseError) {
          console.log("Erro ao parsear dados:", parseError);
          produtos = [];
        }
      }

      // Adiciona o novo produto à lista
      const novoProduto = {
        id: Math.floor(Math.random() * 9999999),
        nome,
      };

      produtos.push(novoProduto);

      // Salva a lista toda
      await AsyncStorage.setItem("@produtos", JSON.stringify(produtos));
      Alert.alert("Produto salvo:", `${novoProduto.nome}`);
      setNome(""); // Limpa o input
    } catch (error) {
      Alert.alert("Erro ao salvar:", `${error}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Produto</Text>

      <Input
        placeholder="Digite o nome do produto"
        onChangeText={(value) => setNome(value)}
      />
      <TouchableOpacity style={styles.botaoEntrar} onPress={salvarDados}>
        <Text style={styles.titleBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },

  titleBotao: {
    fontSize: 16,
    fontWeight: "bold",
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
});

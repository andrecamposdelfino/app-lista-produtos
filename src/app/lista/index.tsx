import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { Input } from "@/components/Input";
import { router, useFocusEffect } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

type Produto = {
  id: number;
  nome: string;
};

export default function Index() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function listar() {
    try {
      const dados = await AsyncStorage.getItem("@produtos");
      if (dados) {
        const lista: Produto[] = JSON.parse(dados);
        setProdutos(lista);
      } else {
        setProdutos([]);
      }
    } catch (error) {
      console.log("Erro ao buscar os dados");
    }
  }

  useEffect(() => {
    listar();
  }, []);

  useFocusEffect(
    useCallback(() => {
      listar();
    }, []),
  );

  function handleForm() {
    router.push("./form");
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Lista de Produtos</Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            backgroundColor: "orange",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
          onPress={handleForm}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Input placeholder="Pesquisar um produto" />

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontSize: 16 }}>{item.nome}</Text>
              <TouchableOpacity>
                <Text style={{ color: "red" }}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    marginTop: 80,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  item: {
    padding: 10,
    height: 80,
    width: "100%",
    backgroundColor: "#eee",
    marginTop: 10,
    borderRadius: 8,
  },
});

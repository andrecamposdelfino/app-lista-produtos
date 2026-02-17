import AsyncStorage from "@react-native-async-storage/async-storage";

const salvarDado = async (value: string) => {
  try {
    await AsyncStorage.setItem("produtos", value);
  } catch (error) {
    console.log(error);
  }
};

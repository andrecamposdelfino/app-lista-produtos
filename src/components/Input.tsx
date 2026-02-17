import { TextInput, TextInputProps } from "react-native";

type Props = {
  placeholder: string;
} & TextInputProps;

export function Input({ placeholder, ...rest }: Props) {
  return (
    <TextInput
      placeholder={placeholder}
      style={{
        width: "100%",
        height: 50,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        paddingHorizontal: 12,
        marginTop: 10,
        marginBottom: 10,
      }}
      {...rest}
    />
  );
}

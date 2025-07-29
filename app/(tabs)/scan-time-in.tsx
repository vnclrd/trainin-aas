import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import RootLayout from "../_layout";

export default function scanTimeIn() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#d9d9d9", "#737373"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <View className="items-center py-72">

      </View>
    </LinearGradient>
  );
}

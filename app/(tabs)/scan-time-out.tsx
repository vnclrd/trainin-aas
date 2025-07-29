import { Text, View, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function ScanTimeIn() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#d9d9d9", "#737373"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <View className="flex-1 justify-center items-center py-72">
        <Image
          source={require("../../assets/images/nfc-wayfinding-mark.png")}
          className="w-[250px] h-[200px]"
          resizeMode="contain"
        />
        {/* Translate marginTop to Tailwind's mt-{value} class */}
        <Text className="mt-[30px] text-[30px] color-[#1e1e1e]">Scan to Time Out.</Text>
      </View>
    </LinearGradient>
  );
}

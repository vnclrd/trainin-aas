import { Text, View, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#d9d9d9", "#737373"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className="flex-1"
    >
      <View className="items-center py-72">
        {/* Title */}
        <Text className="text-6xl text-[#1e1e1e] pb-2">
          <Text className="font-opensans">Train</Text>
          <Text className="font-opensans-bold">In</Text>
        </Text>

        {/* Subtitle */}
        <Text className="font-opensans text-xl mb-8">
          Automated Attendance System
        </Text>

        {/* Time In Button */}
        <Pressable
          onPress={() => router.push("/(tabs)/scan-time-in")}
          className="border border-[#1e1e1e] rounded-[50px]
          items-center justify-center m-5 mt-80
          w-[175px] h-[60px]"
        >
          <Text className="font-opensans text-[#1e1e1e] text-2xl">
            Time In
          </Text>
        </Pressable>

        {/* Time Out Button */}
        <Pressable
          onPress={() => router.push("/(tabs)/scan-time-out")}
          className="border border-[#1e1e1e] rounded-[50px]
          items-center justify-center
          w-[175px] h-[60px]"
        >
          <Text className="font-opensans text-[#1e1e1e] text-2xl">
            Time Out
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

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
        <Text className="text-5xl text-[#1e1e1e] pb-2">
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
          className="border border-[#1e1e1e] rounded-[25px] items-center justify-center m-5 mt-96"
          style={{
            width: 150,
            height: 50,
            backgroundColor: "transparent",
          }}
        >
          <Text className="font-opensans text-[#1e1e1e] text-xl">
            Time In
          </Text>
        </Pressable>

        {/* Time Out Button */}
        <Pressable
          onPress={() => router.push("/(tabs)/scan-time-out")}
          className="border border-[#1e1e1e] rounded-[25px] items-center justify-center"
          style={{
            width: 150,
            height: 50,
            backgroundColor: "transparent",
          }}
        >
          <Text className="font-opensans text-[#1e1e1e] text-xl">
            Time Out
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

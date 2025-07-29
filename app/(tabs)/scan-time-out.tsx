import { Text, View, Image, Animated } from "react-native";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";

export default function ScanTimeIn() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(1)).current;
  
  useEffect(() => {
    // Fade in and out continuously
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0.25,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fadeAnim]);

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
        <Animated.Text
          style={{
            marginTop: 30,
            fontSize: 30,
            color: "#1e1e1e",
            opacity: fadeAnim, // Bind opacity to animation
          }}
        >
          Scan to Time Out.
        </Animated.Text>
      </View>
    </LinearGradient>
  );
}

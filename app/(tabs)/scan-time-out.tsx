import { View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ScanTimeOut() {
  return (
    <LinearGradient
    colors={[ '#d9d9d9', '#737373' ]}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}
    className="flex-1"
    >
      <View className="flex-1 justify-center items-center">
        <Image
          source={require('../../assets/images/nfc-wayfinding-mark.png')}
          className="w-[250px] h-[200px]"
          resizeMode="contain"
        />
        <Text className="text-[30px] color-[#1e1e1e] mt-[30px]">Tap Card to Time In.</Text>
      </View>
    </LinearGradient>
  )
}
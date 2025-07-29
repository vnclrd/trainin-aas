import { View, Text, Image, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'

export default function ScanTimeOut() {
  const router = useRouter()

  return (
    /* Gradient Background */
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
        <Text className="font-opensans text-[30px] color-[#1e1e1e] mt-[30px]">Tap Card to Time In.</Text>
        <Pressable
        onPress={() => router.push('/(tabs)/time-out')}
        className='mt-[30px] border border-[#1e1e1e] rounded-[50px] items-center justify-center w-[150px] h-[50px]'
        >
          <Text className='font-opensans text-[20px]'>Test Button</Text>
        </Pressable>
      </View>
    </LinearGradient>
  )
}
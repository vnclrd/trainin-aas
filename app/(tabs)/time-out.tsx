import { View, Text, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ScanTimeOut() {
  const router = useRouter()

  return (
    <LinearGradient
      colors={[ '#d9d9d9', '#737373' ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className='flex-1 justify-center items-center'>
        <View className='flex-row'>
          <Text className='font-opensans text-5xl' style={{ lineHeight: 70 }}>Goodbye,</Text>
          <Text className='font-opensans-bold text-5xl' style={{ lineHeight: 70 }}> Miguel.</Text>
        </View>
        <Text>Your time out is:</Text>
        <Text
          className='font-opensans-bolditalic text-[70px] color-[#fff]'
          style={{
            textShadowColor: '#000',
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 5,
          }}
        >
          12:00 PM
        </Text>
        <Pressable
          onPress={() => router.push('/')}
          className='absolute bottom-20'
        >
          <Text className='font-opensans text-xl'>Tap to continue</Text>
        </Pressable>
      </SafeAreaView>
      
    </LinearGradient>
  )
}
import { Text, Image, Animated, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef, useEffect } from 'react'

export default function ScanTimeOut() {
  const router = useRouter()
  const fadeAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 0.25, duration: 1000, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 1, duration: 500, useNativeDriver: true })
      ])
    ).start()
  }, [fadeAnim])

  return (
    /* Gradient Background */
    <LinearGradient colors={[ '#d9d9d9', '#737373' ]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{ flex: 1 }}>
      <SafeAreaView className='flex-1 justify-center items-center'>
        <Pressable onPress={() => router.push('/(tabs)/time-out')}>
          <Image
            source={require('../../assets/images/nfc-wayfinding-mark.png')}
            className='w-[250px] h-[200px]'
            resizeMode='contain'
          />
        </Pressable>
        <Animated.Text style={{ opacity: fadeAnim, color: '#1e1e1e', fontSize: 30, marginTop: 30 }}>
          <Text className='font-opensans'>Tap Card to Time Out.</Text>
        </Animated.Text>
      </SafeAreaView>
    </LinearGradient>
  )
}
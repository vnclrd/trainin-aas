import { View, Text, Pressable, Animated, Easing } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef, useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router';

export default function TimeInOnTime() {
  const router = useRouter()
  const translateY = useRef(new Animated.Value(0)).current
  const opacity1 = useRef(new Animated.Value(0)).current
  const opacity2 = useRef(new Animated.Value(0)).current
  const opacity3 = useRef(new Animated.Value(0)).current
  const opacityFadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(translateY, { toValue: 0, duration: 1000, easing: Easing.out(Easing.exp), useNativeDriver: true })
    ]).start()
  }, [])

  useEffect(() => {
    Animated.sequence([
      Animated.delay(500),
      Animated.timing(opacity1, { toValue: 1, duration: 1000, easing: Easing.out(Easing.exp), useNativeDriver: true })
    ]).start()
  }, [])

  useEffect(() => {
    Animated.sequence([
      Animated.delay(1500),
      Animated.timing(opacity2, { toValue: 1, duration: 1000, easing: Easing.out(Easing.exp), useNativeDriver: true })
    ]).start()
  }, [])

  useEffect(() => {
    Animated.sequence([
      Animated.delay(2250),
      Animated.timing(opacity3, { toValue: 1, duration: 1000, easing: Easing.out(Easing.exp), useNativeDriver: true })
    ]).start()
  }, [])

  useEffect(() => {
    Animated.sequence([
      Animated.delay(3000),
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacityFadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
          Animated.timing(opacityFadeAnim, { toValue: 0, duration: 1000, useNativeDriver: true })
        ])
      )
    ]).start()
  }, [opacityFadeAnim])

  const { time } = useLocalSearchParams<{ time: string }>()

  return (

    <LinearGradient
      colors={['#d9d9d9', '#737373']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      
      <SafeAreaView className='flex-1 items-center justify-center'>

        <View className='flex-row'>
          <Animated.Text style={{ opacity: opacity1, alignItems: 'center' }}>
            <Text className='font-opensans text-5xl' style={{ lineHeight: 70 }}>Hello,</Text>
            <Text className='font-opensans-bold text-5xl' style={{ lineHeight: 70 }}> Miguel.</Text>
          </Animated.Text>
        </View>
        
        <Animated.Text style={{ opacity: opacity2 , alignItems: 'center' }}>
          <Text>Your time in is:</Text>
        </Animated.Text>

        <Animated.Text style={{ opacity: opacity3 , alignItems: 'center' }}>
          <Text className='font-opensans-bolditalic text-[70px] color-[#fff]'>{time}</Text>
        </Animated.Text>
        
        <Animated.View style={{ opacity: opacityFadeAnim, alignItems: 'center', position: 'absolute', bottom: 80 }}>
          <Pressable onPress={() => router.push('/')}>
            <Text className='font-opensans text-xl'>Tap to continue</Text>
          </Pressable>
        </Animated.View>
        
      </SafeAreaView>

    </LinearGradient>
  )
}

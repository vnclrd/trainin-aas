import { Text, Pressable, Animated, Easing } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRef, useEffect, useState } from 'react'

export default function Index() {
  // Declare constant translateY
  const translateY = useRef(new Animated.Value(-200)).current // New Animated.Value() is the current position of the object
  const opacity = useRef(new Animated.Value(0)).current
  const router = useRouter()

  // Animation for the Title
  useEffect(() => {
    Animated.sequence([ // Add a sequence to the animation
      Animated.delay(1000),
      Animated.timing(translateY, { toValue: -400, duration: 1000, easing: Easing.out(Easing.exp), useNativeDriver: true })
    ]).start()
  }, [])

  useEffect(() => {
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(opacity, { toValue: 1, duration: 1000, useNativeDriver: true,}),
    ]).start();
  }, []);

  return (
    /* Gradiend Background */
    <LinearGradient
      colors={[ '#d9d9d9', '#737373' ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className='flex-1 items-center justify-center'>
        <Animated.View style={{ transform: [{ translateY }], alignItems: 'center' }}>
          {/* Title */}
          <Text className='text-6xl text-[#1e1e1e] pb-2 top-60'>
            <Text className='font-opensans'>Train</Text>
            <Text className='font-opensans-bold'>In</Text>
          </Text>

          {/* Subtitle */}
          <Text className='font-opensans text-xl top-60'>
            Automated Attendance System
          </Text>
        </Animated.View>
        
        <Animated.View style={{ opacity, alignItems: 'center', position: 'absolute', bottom: 0 }}>

          {/* Time In Button */}
          <Pressable
            onPress={() => router.push('/(tabs)/scan-time-in')}
            className='border border-[#1e1e1e] rounded-[50px]
            items-center justify-center
            w-[175px] h-[60px] absolute bottom-[175px]'
          >
            <Text className='font-opensans text-[#1e1e1e] text-2xl'>
              Time In
            </Text>
          </Pressable>

          {/* Time Out Button */}
          <Pressable
            onPress={() => router.push('/(tabs)/scan-time-out')}
            className="border border-[#1e1e1e] rounded-[50px]
            items-center justify-center
            w-[175px] h-[60px] absolute bottom-[100px]"
          >
            <Text className='font-opensans text-[#1e1e1e] text-2xl'>
              Time Out
            </Text>
          </Pressable>

        </Animated.View>

      </SafeAreaView>
    </LinearGradient>
  );
}

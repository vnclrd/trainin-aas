import { Text, Image, Animated, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef, useEffect } from 'react'

export default function ScanTimeIn() {
  const router = useRouter()
  const fadeAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 0, duration: 1000, useNativeDriver: true })
      ])
    ).start()
  }, [fadeAnim])

  const handleTap = async () => {
    try {
      const response = await fetch('http://192.168.0.101:3000/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cardId: '001',
          type: 'in'
        })
      })
      const data = await response.json()

      if (response.ok) {
        const now = new Date()
        const formattedTime = now.toLocaleTimeString([], {
          hour: 'numeric',
          minute: '2-digit'
        })
        router.push({
          pathname: '/(tabs)/time-in',
          params: { time: formattedTime }
        })
      } else {
        alert('Error: ' + data.message)
      }
    } catch (error) {
      console.error(error)
      alert('Failed to record attendance')
    }
  }

	return (
    /* Gradient Background */
		<LinearGradient colors={[ '#d9d9d9', '#737373' ]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{ flex: 1 }}>
			<SafeAreaView className='flex-1 justify-center items-center'>
        <Pressable onPress={handleTap}>
          <Image
            source={require('../../assets/images/nfc-wayfinding-mark.png')}
            className='w-[250px] h-[200px]'
            resizeMode="contain"
          />
        </Pressable>
        <Animated.Text style={{ opacity: fadeAnim, color: '#1e1e1e', fontSize: 30, marginTop: 30 }}>
          <Text className='font-opensans'>Tap card to time in</Text>
        </Animated.Text>
			</SafeAreaView>
		</LinearGradient>
	)
}

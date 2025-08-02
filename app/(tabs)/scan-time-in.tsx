import { Text, Image, Animated, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRef, useEffect, useState } from 'react'

export default function ScanTimeIn() {
  const router = useRouter()
  const fadeAnim = useRef(new Animated.Value(0)).current
  const [modalVisible, setModalVisible] = useState(false);
  const fadeModal = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, { toValue: 1, duration: 1000, useNativeDriver: true }),
        Animated.timing(fadeAnim, { toValue: 0, duration: 1000, useNativeDriver: true })
      ])
    ).start()
  }, [fadeAnim])

  useEffect(() => {
    if (modalVisible) { Animated.timing(fadeModal, { toValue: 1, duration: 300, useNativeDriver: true, }).start()
      const timer = setTimeout(() => {
        Animated.timing(fadeModal, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => {
          setModalVisible(false)
        })
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [modalVisible])

  const handleTap = async () => {
    try {
      const response = await fetch('http://192.168.0.101:3000/attendance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cardId: '001',
          type: 'in'
        })
      });

      const data = await response.json();
      console.log('Server response:', data);

      if (response.ok) {
        if (data.status === 'already_in') {
          setModalVisible(true);
          return;
        }

        if (data.status === 'in_recorded') {
          const now = new Date();
          const formattedTime = now.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit'
          });

          // Pass time and name to time-in.tsx
          router.push({
            pathname: '/(tabs)/time-in',
            params: { 
              name: data.name,
              time: formattedTime
            }
          });
          return;
        }
        alert(data.message);

      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error(error);
      alert('Failed to record attendance');
    }
  };

	return (
    /* Gradient Background */
		<LinearGradient colors={[ '#d9d9d9', '#737373' ]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} style={{ flex: 1 }}>
      <SafeAreaView className='flex-1 justify-center items-center'>
        <Pressable onPress={handleTap}>
          <Image
            source={require('../../assets/images/nfc-wayfinding-mark.png')}
            className='w-[250px] h-[200px]'
            resizeMode='contain'
          />
        </Pressable>
        <Animated.Text style={{ opacity: fadeAnim, color: '#1e1e1e', fontSize: 30, marginTop: 30 }}>
          <Text className='font-opensans'>Tap card to time in</Text>
        </Animated.Text>
        {modalVisible && (
          <Animated.View style={{
            opacity: fadeModal,
            position: 'absolute',
            top: '75%',
            left: 0,
            right: 0,
            alignItems: 'center',
            zIndex: 10,
            }}
          >
            <Text className='font-opensans text-xl text-white'>
              You've already timed in today.
            </Text>
          </Animated.View>
        )}
      </SafeAreaView>
		</LinearGradient>
	)
}

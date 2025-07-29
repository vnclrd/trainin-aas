import { Text, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const router = useRouter();

  return (
    /* Gradiend Background */
    <LinearGradient
      colors={[ '#d9d9d9', '#737373' ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView className='flex-1 items-center'>
        {/* Title */}
        <Text className='text-6xl text-[#1e1e1e] pb-2 top-60'>
          <Text className='font-opensans'>Train</Text>
          <Text className='font-opensans-bold'>In</Text>
        </Text>

        {/* Subtitle */}
        <Text className='font-opensans text-xl top-60'>
          Automated Attendance System
        </Text>

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
      </SafeAreaView>
    </LinearGradient>
  );
}

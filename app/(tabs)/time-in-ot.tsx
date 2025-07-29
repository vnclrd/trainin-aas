import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

export default function TimeInOnTime() {
  return (
    <LinearGradient
      colors={[ '#d9d9d9', '#737373' ]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      className='flex-1'    
    >
      <View className='flex-1 items-center justify-center'>

        <View className='flex-row font-opensans color-[#1e1e1e] mb-2'>
          <Text className='text-5xl' style={{ lineHeight: 70 }}>Hello,</Text>
          <Text className='font-opensans-bold text-5xl' style={{ lineHeight: 70 }}> Miguel.</Text>
        </View>

        <Text>Your time in is:</Text>
        <Text
          className='font-opensans-bolditalic text-[70px] color-[#fff]'
          style={{
            textShadowColor: '#000',
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 5,
          }}
        >
          7:45 AM
        </Text>

        <Text className='absolute font-opensans text-xl bottom-20'>Tap to continue</Text>
        
      </View>


      
    </LinearGradient>
  )
}

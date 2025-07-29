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
      <View className='items-center py-72'>
        <Text className='text-5xl'>
          <Text className=''>Hello,</Text>
          <Text className='font-bold'> Miguel.</Text>
        </Text>
        
      </View>
    </LinearGradient>
  )
}

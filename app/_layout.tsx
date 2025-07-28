import { Stack } from "expo-router";
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { Text } from 'react-native';
import './globals.css'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    OpenSans: OpenSans_400Regular,
    OpenSansBold: OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // or a splash screen
  }

  return (
    <Stack>
      <Stack.Screen 
        name="index"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}

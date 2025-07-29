import { Stack } from "expo-router";
import { Text } from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold, OpenSans_800ExtraBold_Italic } from '@expo-google-fonts/open-sans';
import './globals.css'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    OpenSans: OpenSans_400Regular,
    OpenSansBold: OpenSans_700Bold,
    OpenSansBoldItalic: OpenSans_800ExtraBold_Italic
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}></Stack>
  );
}

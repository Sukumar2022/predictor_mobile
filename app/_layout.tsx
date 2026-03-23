import { useFonts } from 'expo-font';
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    poppins:require('../assets/fonts/Poppins-Regular.ttf'),

  })
  return <Stack  screenOptions={{headerShown:false}}/>;
}
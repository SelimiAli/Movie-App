import { Stack } from "expo-router";
import './globals.css';

export default function RootLayout() {
  return (
      <Stack>
        <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="Movie/[id]"
            options={{ headerShown: false }}/>
        <Stack.Screen
            name="search"
            options={{ headerShown: false }}/>
      </Stack>
  )
}


import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import "./global.css";

export default function Home() {
  const router = useRouter();
  return (
    <View className="h-full flex justify-center items-center gap-11 bg-[#121212]">
      <Image
        source={require("../assets/images/_logo.png")}
        style={{ width: 120, height: 120, borderRadius: 40 }}
      />
      <Text
        style={{ fontFamily: "poppins" }}
        className="mt-6 text-4xl text-white text-center uppercase "
      >
        predictor
      </Text>

      <Text
        style={{ fontFamily: "poppins" }}
        className="mt-6 text-xl bg-blue-700 text-white text-center p-4 rounded-xl"
        onPress={() => router.push("/(tab)")}
      >
        Get Started
      </Text>

      <Text className="absolute bottom-1 text-sm text-white">
        Predictor | Version 1.0.1
      </Text>
    </View>
  );
}

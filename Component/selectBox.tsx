import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Text, View } from "react-native";

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

const SelectBox = ({ title }) => {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });
  return (
    <View className="mb-4 bg-white rounded-xl border border-gray-300">
      <Text
        style={{ fontFamily: "Poppins_400Regular" }}
        className="text-gray-700 mb-1 p-3"
      >
        {title}
      </Text>
      <Picker>
        <Picker.Item label="Select" value="" />
        <Picker.Item label="Updating...." value="" />
      </Picker>
    </View>
  );
};

export default SelectBox;

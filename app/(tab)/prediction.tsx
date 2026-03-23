import "@/app/global.css";
import SelectBox from "@/Component/selectBox";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

const Prediction = () => {
  const [fontsLoaded] = useFonts({
      Poppins_400Regular,
      Poppins_600SemiBold,
      Poppins_700Bold,
    });
  return (
    <ScrollView className="flex-1 text-white bg-[#121212]">
      <View className="p-5 flex-1">
        {/* Title */}
        <Text  style={{ fontFamily: "Poppins_400Regular", fontSize:20,color:"#fff", margin:10 }} >
          Your Selection
        </Text>
        <SelectBox title="Category"/>
        <SelectBox title="Product Type"/>
        <SelectBox title="Product Name"/>

        {/* Price Min & Max */}
        <View className="mb-4 flex-row justify-between">
          {/* Min Price */}
          <View className="flex-1 mr-2">
            <Text style={{ fontFamily: "Poppins_400Regular", fontSize:14,color:"#fff", padding:2 }}>Min Price</Text>
            <TextInput
              placeholder="0"
              keyboardType="numeric"
              className="bg-white p-3 rounded-xl border border-gray-300"
            />
          </View>

          {/* Max Price */}
          <View className="flex-1 ml-2">
            <Text style={{ fontFamily: "Poppins_400Regular", fontSize:14,color:"#fff", padding:2 }}>Max Price</Text>
            <TextInput
              placeholder="1000"
              keyboardType="numeric"
              className="bg-white p-3 rounded-xl border border-gray-300"
            />
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity className="bg-blue-600 p-4 rounded-xl mt-3 flex justify-center items-center">
          <Text style={{ fontFamily: "Poppins_400Regular", fontSize: 16, color:'#fff' }} >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Prediction;

import { LinearGradient } from "expo-linear-gradient";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const { width } = Dimensions.get('window');

const DATA = [
  { id: "1", title: "Browse By Product Category", icon: "laptop" },
  { id: "2", title: "Adjust Your Budget", icon: "pie-chart" },
  { id: "3", title: "Smart Recommendation", icon: "recommend" },
  { id: "4", title: "Customer Service", icon: "phone" },
];

const Index = () => {
  const styles = StyleSheet.create({
    box_shadow: {
      shadowColor: "yellow",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.6,
      shadowRadius: 20,
      elevation: 10,
    },
    // Adding a subtle shadow to the rows to match the "Future" aesthetic
    row_shadow: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      elevation: 5,
    }
  });

  return (
    <FlatList
      data={DATA}
      // REMOVED numColumns={2} to make it row-wise
      keyExtractor={(item) => item.id}
      style={{ flex: 1, backgroundColor: "#121212" }}
      contentContainerStyle={{ paddingBottom: 40 }} // Extra space at bottom
      ListHeaderComponent={
        <>
          <View className="flex justify-center items-center p-3">
            <Image
              source={require("@/assets/images/banner1.jpg")}
              style={{ width: "96%", height: 200, borderRadius: 20 }}
            />
          </View>

          <View className="flex mt-10 justify-center items-center" style={styles.box_shadow}>
            <Text className="p-4 text-lg w-[90%] text-white rounded-xl font-poppins font-bold text-center uppercase">
              Experience the Future of Shopping with Our AI-Powered Predictor
            </Text>
          </View>
        </>
      }
      renderItem={({ item }) => (
        <View className="mx-5 mt-6 h-28" style={styles.row_shadow}>
          <LinearGradient
            colors={["#341C67", "#081849"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }} 
            style={{
              flex: 1,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 20,
              borderWidth: 1,
              borderColor: 'rgba(255,255,255,0.1)'
            }}
          >
            <View className="bg-white/10 p-3 rounded-2xl mr-4">
              <Icon name={item.icon} size={32} color="#FFF" />
            </View>
            <Text className="text-white font-poppins font-bold text-lg flex-1">
              {item.title}
            </Text>
           
          </LinearGradient>
        </View>
      )}
    />
  );
};

export default Index;
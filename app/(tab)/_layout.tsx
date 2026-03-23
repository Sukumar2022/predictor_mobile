import '@/app/global.css';
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts } from 'expo-font';
import { LinearGradient } from "expo-linear-gradient";
import { Tabs } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";


const Layout = () => {
   const [loaded] = useFonts({
      poppins:require('../../assets/fonts/Poppins-Regular.ttf'),
  
    })
  const [predictionIcon, setPredictionIcon] = useState(null);

  useEffect(() => {
    const icon = (
      <View style={{ marginTop: -30 }}>
        <LinearGradient
          colors={["red", "#130f40"]}
          style={{
            width: 70,
            height: 70,
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign name="bar-chart" size={26} color="white" />
        </LinearGradient>
      </View>
    );
  
    setPredictionIcon(icon);
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#ff3b30",
        tabBarInactiveTintColor: "#8e8e93",

        tabBarStyle: {
          position: "absolute",
          bottom:0,
          left: 20,
          right: 20,
          elevation: 10,
          backgroundColor: "#332940",
          borderRadius: 20,
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          shadowColor: "#000",
          shadowOpacity: 0.15,
          shadowOffset: { width: 0, height: 10 },
          shadowRadius: 10,
          borderTopWidth: 0,
        },

        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
      
        name="index"
        options={{
          title: "Home",
          tabBarLabelStyle: { fontSize: 10, fontWeight: "600", fontFamily: "poppins" },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "About",
          tabBarLabelStyle: { fontSize: 10, fontWeight: "600", fontFamily: "poppins" },
          tabBarIcon: ({ color }) => (
            <AntDesign name="question-circle" size={22} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="prediction"
        options={{
          title: "Prediction",
          tabBarLabel: () => null,
          tabBarIcon: () => predictionIcon,
        }}
      />
      <Tabs.Screen
        name="pricing"
        options={{
          title: "Pricing",
          tabBarLabelStyle: { fontSize: 10, fontWeight: "600", fontFamily: "poppins" },
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "pricetag" : "pricetag-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarLabelStyle: { fontSize: 10, fontWeight: "600", fontFamily: "poppins" },
          tabBarIcon: ({ color, focused }) => (
            <Entypo name={focused ? "user" : "user"} size={24} color={color} />
          ),
        }}
      />
    </Tabs>

    
  );
};

export default Layout;
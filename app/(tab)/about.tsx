import { LinearGradient } from "expo-linear-gradient";
import { Bot, Cpu, Github, Mail, Twitter } from "lucide-react-native";
import React from "react";
import { Dimensions, Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const FeatureCard = ({ icon: Icon, title, description }) => (
  <View className="bg-white/5 p-6 rounded-3xl border border-white/10 mb-4">
    <View className="bg-cyan-500/10 w-12 h-12 rounded-2xl items-center justify-center mb-4">
      <Icon size={24} color="#22D3EE" />
    </View>
    <Text className="text-white font-p-bold text-lg mb-2">{title}</Text>
    <Text className="text-slate-400 font-p-reg text-sm leading-5">
      {description}
    </Text>
  </View>
);

const About = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#121212]">
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {/* Hero Section */}
        <View className="h-64 justify-center items-center px-6">
          <LinearGradient
            colors={["#A855F7", "#22D3EE"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="absolute inset-0 opacity-20"
          />
          <View className="bg-white/10 p-5 rounded-full mb-4 border border-white/20">
            <Bot size={48} color="#22D3EE" strokeWidth={1.5} />
          </View>
          <Text className="text-white text-3xl font-p-bold">Predictor AI</Text>
          <Text className="text-cyan-400 font-p-semi tracking-[4px] uppercase text-xs mt-1">
            Version 2.0.4
          </Text>
        </View>

        {/* Our Mission */}
        <View className="px-6 mb-8">
          <Text className="text-slate-500 p-2                                                                                                                                              font-p-bold text-xs uppercase tracking-widest mb-4">
            Our Mission
          </Text>
          <Text className="text-white font-p-reg text-lg leading-7">
            We are redefining commerce by merging{" "}
            <Text className="text-purple-400 font-p-bold">Deep Learning</Text>{" "}
            with your personal style. Our goal ......
          </Text>
        </View>

        {/* Tech Stack Cards */}
        <View className="px-6 mb-8">
          <Text className="text-slate-500 font-p-bold text-xs uppercase tracking-widest mb-4">
            The Engine
          </Text>
          <FeatureCard
            icon={Cpu}
            title="Neural Processing"
            description="Our custom LLM analyzes thousands of data points to predict the best E-shop with 96% accuracy."
          />
        </View>

        {/* Social / Connect */}
        <View className="px-6 mb-10">
          <Text className="text-slate-500 font-p-bold text-xs uppercase tracking-widest mb-4">
            Connect With Us
          </Text>
          <View className="flex-row justify-between">
            {[
              { icon: Twitter, color: "#1DA1F2" },
              { icon: Github, color: "#FFFFFF" },
              { icon: Mail, color: "#EA4335" },
            ].map((social, i) => (
              <Pressable
                key={i}
                className="bg-white/5 h-16 w-[30%] rounded-2xl items-center justify-center border border-white/10 active:bg-white/10"
              >
                <social.icon size={24} color={social.color} />
              </Pressable>
            ))}
          </View>
        </View>

        {/* Footer info */}
        <View className="px-6 items-center">
          <Text className="text-slate-600 font-p-reg text-xs text-center">
            Designed and Developed in 2026.{"\n"}© Predictor AI Technologies
            Inc. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

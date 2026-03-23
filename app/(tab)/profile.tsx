import { LinearGradient } from 'expo-linear-gradient';
import {
    Bell,
    ChevronRight,
    LogOut,
    ShieldCheck,
    ShoppingBag,
    User,
    Zap
} from 'lucide-react-native';
import React from 'react';
import { Image, Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileOption = ({ icon: Icon, title, subtitle, onPress, isLast = false }) => (
  <Pressable 
    onPress={onPress}
    className={`flex-row items-center py-4 ${!isLast ? 'border-b border-white/5' : ''} active:opacity-70`}
  >
    <View className="bg-white/5 p-3 rounded-2xl mr-4">
      <Icon size={22} color="#A855F7" />
    </View>
    <View className="flex-1">
      <Text className="text-white font-p-semi text-base">{title}</Text>
      {subtitle && <Text className="text-slate-500 font-p-reg text-xs">{subtitle}</Text>}
    </View>
    <ChevronRight size={18} color="#475569" />
  </Pressable>
);

const Profile = () => {
  const [isAiEnabled, setIsAiEnabled] = React.useState(true);

  return (
    <SafeAreaView className="flex-1 bg-[#121212]">
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        
        {/* Header / Avatar Section */}
        <View className="items-center pt-8 pb-6 px-6">
          <View className="relative">
            <LinearGradient
              colors={['#A855F7', '#22D3EE']}
              className="p-1 rounded-full"
            >
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde' }} 
                className="w-24 h-24 rounded-full border-4 border-[#121212]"
              />
            </LinearGradient>
            <View className="absolute bottom-0 right-0 bg-[#22D3EE] p-1.5 rounded-full border-2 border-[#121212]">
              <Zap size={14} color="black" />
            </View>
          </View>
          
          <Text className="text-white text-2xl font-p-bold mt-4">Test</Text>
          <Text className="text-slate-500 font-p-reg">test@example.com</Text>
          
          <Pressable className="mt-4 bg-white/5 px-6 py-2 rounded-full border border-white/10">
            <Text className="text-white font-p-semi text-sm">Edit Profile</Text>
          </Pressable>
        </View>

        {/* AI Stats Card */}
        <View className="px-6 mb-8">
          <LinearGradient
            colors={['#1E1B4B', '#312E81']}
            className="rounded-3xl p-5 flex-row justify-between border border-white/10"
          >
            <View className="items-center flex-1 border-r border-white/10">
              <Text className="text-cyan-400 font-p-bold text-lg">12</Text>
              <Text className="text-slate-400 font-p-reg text-[10px] uppercase">Orders</Text>
            </View>
            <View className="items-center flex-1 border-r border-white/10">
              <Text className="text-purple-400 font-p-bold text-lg">84%</Text>
              <Text className="text-slate-400 font-p-reg text-[10px] uppercase">AI Match</Text>
            </View>
            <View className="items-center flex-1">
              <Text className="text-yellow-400 font-p-bold text-lg">₹1.2k</Text>
              <Text className="text-slate-400 font-p-reg text-[10px] uppercase">Saved</Text>
            </View>
          </LinearGradient>
        </View>

        {/* Settings Groups */}
        <View className="px-6">
          <Text className="text-slate-500 font-p-bold text-xs uppercase tracking-widest mb-4">Account</Text>
          <View className="bg-white/5 rounded-3xl px-4 border border-white/5 mb-8">
            <ProfileOption icon={ShoppingBag} title="My Orders" subtitle="Track and manage purchases" />
            <ProfileOption icon={User} title="Personal Details" subtitle="Update your information" />
            <ProfileOption icon={ShieldCheck} title="Privacy & Security" subtitle="Manage your data" isLast />
          </View>

          <Text className="text-slate-500 font-p-bold text-xs uppercase tracking-widest mb-4">Preferences</Text>
          <View className="bg-white/5 rounded-3xl px-4 border border-white/5 mb-8">
            <View className="flex-row items-center justify-between py-4 border-b border-white/5">
               <View className="flex-row items-center">
                  <View className="bg-white/5 p-3 rounded-2xl mr-4">
                    <Zap size={22} color="#22D3EE" />
                  </View>
                  <Text className="text-white font-p-semi text-base">AI Personalized Feed</Text>
               </View>
               <Switch 
                value={isAiEnabled} 
                onValueChange={setIsAiEnabled}
                trackColor={{ false: '#334155', true: '#A855F7' }}
               />
            </View>
            <ProfileOption icon={Bell} title="Notifications" isLast />
          </View>

          <Pressable className="flex-row items-center justify-center py-4 bg-red-500/10 rounded-2xl border border-red-500/20">
            <LogOut size={20} color="#ef4444" />
            <Text className="text-red-500 font-p-bold ml-2">Log Out</Text>
          </Pressable>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
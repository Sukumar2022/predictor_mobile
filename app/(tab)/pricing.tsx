import { LinearGradient } from 'expo-linear-gradient';
import { Check, Crown, ShieldCheck, Zap } from 'lucide-react-native';
import React, { useState } from 'react';
import { Dimensions, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const PLANS = [
  {
    id: 'basic',
    name: 'Starter',
    price: 'Free',
    features: ['5 AI Predictions/day', 'Standard Support', 'Basic Categories'],
    icon: <Zap size={24} color="#94a3b8" />,
    color: ['#1e293b', '#0f172a'],
    accent: '#64748b',
  },
  {
    id: 'pro',
    name: 'AI Pro',
    price: '₹50',
    period: '/mo',
    popular: true,
    features: ['Unlimited Predictions', 'Priority AI Processing', 'All Genuine Reviews', '24/7 Expert Chat'],
    icon: <Crown size={28} color="#facc15" />,
    color: ['#4c1d95', '#1e1b4b'],
    accent: '#a855f7',
  },
  {
    id: 'ultra',
    name: 'Enterprise Level',
    price: '₹150',
    period: '/mo',
    features: ['Multi-User Sync', 'Advanced Analytics', 'Concierge Advisor', 'Beta Feature Access'],
    icon: <ShieldCheck size={24} color="#22d3ee" />,
    color: ['#164e63', '#083344'],
    accent: '#22d3ee',
  },
];

const Pricing = () => {
  const [selected, setSelected] = useState('pro');

  return (
    <SafeAreaView className="flex-1 bg-[#121212]">
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* Header Section */}
        <View className="px-6 pt-8 pb-4 items-center">
          <Text className="text-ai-cyan font-p-bold uppercase tracking-widest text-xs mb-2">
            Pricing Plans
          </Text>
          <Text className="text-white text-3xl font-p-bold text-center">
            Ready to Upgrade your{'\n'}Shopping Experience?
          </Text>
        </View>

        {/* Pricing Cards */}
        <View className="px-5">
          {PLANS.map((plan) => (
            <Pressable 
              key={plan.id} 
              onPress={() => setSelected(plan.id)}
              className="mb-5"
            >
              <LinearGradient
                colors={plan.color}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={{
                  borderRadius: 32,
                  padding: 24,
                  borderWidth: selected === plan.id ? 2 : 1,
                  borderColor: selected === plan.id ? plan.accent : 'rgba(255,255,255,0.05)',
                }}
              >
                {plan.popular && (
                  <View className="absolute top-0 right-10 bg-yellow-400 px-3 py-1 rounded-b-xl">
                    <Text className="text-black font-p-bold text-[10px] uppercase">Most Popular</Text>
                  </View>
                )}

                <View className="flex-row justify-between items-center mb-4">
                  <View className="bg-white/10 p-3 rounded-2xl">
                    {plan.icon}
                  </View>
                  <View className="items-end">
                    <Text className="text-white text-3xl font-p-bold">{plan.price}</Text>
                    {plan.period && <Text className="text-slate-400 font-p-reg text-xs">{plan.period}</Text>}
                  </View>
                </View>

                <Text className="text-white text-xl font-p-bold mb-4">{plan.name}</Text>

                {/* Feature List */}
                <View className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <View key={idx} className="flex-row items-center mb-2">
                      <Check size={16} color={plan.accent} strokeWidth={3} />
                      <Text className="text-slate-300 ml-3 font-p-reg text-sm">{feature}</Text>
                    </View>
                  ))}
                </View>

                {/* Dynamic Button */}
                <View 
                  className={`py-4 rounded-2xl items-center ${selected === plan.id ? 'bg-white' : 'bg-white/10'}`}
                >
                  <Text className={`font-p-bold ${selected === plan.id ? 'text-black' : 'text-white'}`}>
                    {plan.id === 'basic' ? 'Current Plan' : 'Choose ' + plan.name}
                  </Text>
                </View>
              </LinearGradient>
            </Pressable>
          ))}
        </View>

        <Text className="text-slate-500 text-center text-xs font-p-reg px-10">
          All plans include a 7-day money-back guarantee. Prices are in Rupee.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pricing;
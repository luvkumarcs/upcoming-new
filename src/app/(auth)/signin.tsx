import InputField from '@/src/components/atoms/InputField';
import ThemeButton from '@/src/components/atoms/ThemeButton';
import VideoPlayer from '@/src/components/atoms/VideoPlayer';
import globalStyles from '@/src/constants/globalstyle';
import axios from 'axios';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const onSignUp = () => {
    router.navigate('/signup');
  }
  const inputData = [
  {
    placeholder: "Enter your email",
    placeholderColor: "#fff",
    autoCapitalize: "none",
    autoCorrect: false,
    contentType: "emailAddress",
    keyboardType: "email-address",
    value: email,
    onChangeText: setEmail,
  },
  {
    placeholder: "Enter your password",
    placeholderColor: "#fff",
    autoCapitalize: "none",
    autoCorrect: false,
    contentType: "password",
    keyboardType: "default",
    secureTextEntry: true,
    value: password,
    onChangeText: setPassword,
  },
];

const handleLogin = async () => {
  console.log(" I am inside handleLogin");
  try {
    const res = await axios.post('http://localhost:5000/auth/login', { email, password });
    console.log(res,"response from login");
    await SecureStore.setItemAsync('access_token', res.data.access_token);
    await SecureStore.setItemAsync('refresh_token', res.data.refresh_token);

    Alert.alert('Success ✅', 'You are logged in!');
    router.navigate('/(main)/(tabs)'); // navigate to your app's home/dashboard
  } catch (err: any) {
    Alert.alert('Login Failed ❌', err.response?.data?.message || 'Something went wrong');
  }
};

  return (
    <SafeAreaView style={{ flex: 1, position: 'relative' }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <VideoPlayer />
      <View className='absolute flex h-full w-full px-4 items-center justify-center'>
        <BlurView
          style={globalStyles.blurContainer}
          tint="light"      // light, dark, xlight, etc.
          intensity={20}       // blur intensity
        >
          <Text style={globalStyles.signinuptext}>Sign In</Text>
          <Text className='text-white text-title-11 mt-2'>Connect with people who match your energy</Text>
          <View className='gap-8 w-full mt-4'>
            <View className='gap-4 w-full '>
              {
                inputData.map((data, index) => (
                  <InputField inputFieldInfo={data} key={index} />
                ))
              }
              <View className='flex items-end'>
                <TouchableOpacity className='inline-block'>
                  <Text className='text-white text-title-11'>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ThemeButton buttontitle="Sign In" onPress={handleLogin} />
            <View className='flex-row items-center justify-center gap-1'>
              <Text className='text-white text-title-11'>Don't have an account? </Text>
              <TouchableOpacity activeOpacity={0.8} onPress={onSignUp}>
                <Text className='text-primary font-bold text-title-10'>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </View>
    </SafeAreaView>
  )
}



export default Signin
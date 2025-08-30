import InputField from "@/src/components/atoms/InputField";
import ThemeButton from "@/src/components/atoms/ThemeButton";
import VideoPlayer from "@/src/components/atoms/VideoPlayer";
import globalStyles from "@/src/constants/globalstyle";
import axios from "axios";
import { BlurView } from "expo-blur";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Alert, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Signup = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
  if (password !== confirmPassword) {
    return Alert.alert('Error', 'Passwords do not match ❌');
  }

  try {
    const [firstName, ...lastParts] = fullName.trim().split(' ');
    const lastName = lastParts.join(' ');

    const res = await axios.post('http://localhost:5000/auth/signup', {
      email,
      password,
      firstName,
      lastName,
      dateOfBirth: '1000-01-01',
    });
    console.log(res,"response from signup");

    // await SecureStore.setItemAsync('access_token', res.data.access_token);
    // await SecureStore.setItemAsync('refresh_token', res.data.refresh_token);

    Alert.alert('Success ✅', 'Account created!');
    router.replace('/(main)/(tabs)');
  } catch (err: any) {
    console.log(err);
    console.log(err.response);
    Alert.alert('Signup Failed ❌', err.response?.data?.message || 'Something went wrong');
  }
};

  const onSignIn = () => {
    router.navigate("/signin");
  };
  const inputData = [
  {
    placeholder: "Enter your full name",
    placeholderColor: "#fff",
    autoCapitalize: "words",
    autoCorrect: false,
    contentType: "name",
    keyboardType: "default",
    value: fullName,
    onChangeText: setFullName,
  },
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
  {
    placeholder: "Confirm your password",
    placeholderColor: "#fff",
    autoCapitalize: "none",
    autoCorrect: false,
    contentType: "password",
    keyboardType: "default",
    secureTextEntry: true,
    value: confirmPassword,
    onChangeText: setConfirmPassword,
  },
];

  return (
    <SafeAreaView style={{ flex: 1, position: "relative" }}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <VideoPlayer />
      <View className="absolute flex h-full w-full px-4 items-center justify-center">
        <BlurView
          style={globalStyles.blurContainer}
          tint="light" // light, dark, xlight, etc.
          intensity={20} // blur intensity
        >
          <Text style={globalStyles.signinuptext}>Create Account</Text>
          <Text className="text-white text-title-11 mt-2">
            Join our community and find your vibe
          </Text>
          <View className="gap-8 w-full mt-4">
            <View className="gap-4 w-full">
              {inputData.map((data, index) => (
                <InputField inputFieldInfo={data} key={index} />
              ))}
            </View>
            <ThemeButton buttontitle="Create Account" onPress={handleSignup} />
            <View className="flex-row items-center justify-center gap-1">
              <Text className="text-white text-title-11">
                Already have an account?
              </Text>
              <TouchableOpacity activeOpacity={0.8} onPress={onSignIn}>
                <Text className="text-primary font-bold text-title-10">
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </BlurView>
      </View>
    </SafeAreaView>
  );
};

export default Signup;

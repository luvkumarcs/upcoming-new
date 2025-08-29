import '@/global.css';
import ThemeButton from '@/src/components/atoms/ThemeButton';
import { useRouter } from 'expo-router';
import { VideoView, useVideoPlayer } from 'expo-video';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Auth = () => {
  const videoPlayer = useVideoPlayer(require('../../assets/videos/welcomme_pg_bg.mp4'), player => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  const router=useRouter();

  const onSignIn=()=>{
    router.navigate('/signin');
  }
  const onSignUp=()=>{
    router.navigate('/signup');
  }
  const onSkip=()=>{
    router.navigate(`/(main)/(tabs)` as any);
  }
  const { height } = Dimensions.get('screen');
  return (
    <SafeAreaView  style={styles.container}>
      <VideoView
        style={[styles.video, { height }]}
        player={videoPlayer}
        nativeControls={false}
        allowsFullscreen={false}
        allowsPictureInPicture={false}
        contentFit="cover"
      />
      <View className='rlative flex h-full w-full'>
        <TouchableOpacity onPress={onSkip} className='absolute right-0 top-0 bg-transparent'>
          <Text className='right-0 rounded-xl border px-3 py-2 m-3 text-white border-white'>Skip for now</Text>
        </TouchableOpacity>
        <View className="flex items-center mt-32">
          <Text className="text-5xl font-extrabold font-josefin leading-snug text-white">Upcoming</Text>
          <Text className="text-lg italic font-medium text-primary">Slogan</Text>
        </View>
        <View className='absolute flex justify-center items-center bottom-14 w-full px-4 gap-2'>
          <ThemeButton buttontitle="SIGN IN" onPress={onSignIn}/>
          <Text className='text-white font-semibold'>OR</Text>
          <ThemeButton buttontitle="SIGN UP" onPress={onSignUp}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    ...StyleSheet.absoluteFillObject, // full screen
    zIndex: -1,
  },
});

export default Auth;
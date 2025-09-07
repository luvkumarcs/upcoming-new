import imagePaths from '@/src/constants/imagePaths';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const NearByEventCard = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} className=' rounded-2xl overflow-hidden'>
      <View className='w-full aspect-video'>
        <Image
          className='w-full h-full '
          source={imagePaths.eventImg1}
        />
      </View>
      <View className='p-4 bg-white'>
        <Text className='text-title-10 font-medium text-primary capitalize'>Summer music festival</Text>
        <View className='flex-row items-center mt-2 gap-1'>
          <Entypo name="location-pin" size={18} color="#008000" />
          <Text className='text-title-12 font-medium text-grey78'>New York, NY</Text>
        </View>
        <View className='flex-row items-center mt-2 gap-1'>
          <MaterialIcons name="event-note" size={18} color="#008000" />
          <Text className='text-title-12 font-medium text-grey78 capitalize'>dec 25, 7:00 PM</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default NearByEventCard
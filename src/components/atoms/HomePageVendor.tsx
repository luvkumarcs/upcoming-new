import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { Text, View } from 'react-native';

const HomePageVendor = ({homePageVendorInfo}) => {
  return (
    <View className='px-4 py-8 shadow-card-2 bg-white rounded-md items-center'>
      <View className={`w-14 h-14 rounded-full items-center justify-center ${homePageVendorInfo.customClass}`}>
      <MaterialIcons name={homePageVendorInfo.iconName} size={homePageVendorInfo.iconSize} color={homePageVendorInfo.iconColor} />
      </View>
      <Text className='capitalize mt-3 text-title-11 font-medium'>{homePageVendorInfo.title}</Text>
    </View>
  )
}

export default HomePageVendor
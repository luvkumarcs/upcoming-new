import HomePageVendor from '@/src/components/atoms/HomePageVendor'
import NearByEventCard from '@/src/components/atoms/NearByEventCard'
import ThemeButton from '@/src/components/atoms/ThemeButton'
import React from 'react'
import { ScrollView, StatusBar, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeTab = () => {
  const homePageVendorData = [
    {
      customClass: 'bg-primary-100',
      iconName: 'event',
      iconSize: 28,
      iconColor: '#ff6347',
      title: 'add Events'
    },
    {
      customClass: 'bg-secondary-100',
      iconName: 'event-available',
      iconSize: 28,
      iconColor: '#008000',
      title: 'upcoming events'
    },
    {
      customClass: 'bg-primary-100',
      iconName: 'event',
      iconSize: 28,
      iconColor: '#ff6347',
      title: 'sell passes'
    },
    {
      customClass: 'bg-secondary-100',
      iconName: 'event',
      iconSize: 28,
      iconColor: '#008000',
      title: 'buy passes'
    },
  ]
  return (
    <SafeAreaView className='px-3 pb-2'>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='my-5'>
          <Text className='text-title-9 text-secondary font-medium'>Good Morning, Prof. Luv Kumar</Text>
        </View>
        <ThemeButton buttontitle='Find Your Vibe' onPress={() => { }} bgColor='#ff6347' />
        <View className='mt-6 flex flex-row flex-wrap gap-x-3 gap-y-4 justify-between'>
          {
            homePageVendorData.map((data, index) => (
              <View className='basis-[48%]' key={index}>
                <HomePageVendor homePageVendorInfo={data} />
              </View>
            ))
          }
        </View>
        <View className='mt-5'>
          <View className='flex flex-row items-center justify-between'>
            <Text className='text-title-9 text-black font-medium capitalize'>Top nearby events</Text>
            <TouchableOpacity>
              <Text className='text-title-11 text-primary font-medium capitalize'>view all</Text>
            </TouchableOpacity>
          </View>
          <View className='mt-3'>
            <NearByEventCard/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeTab
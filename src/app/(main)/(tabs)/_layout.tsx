import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import BuddiesTab from './Buddies';
import ChatTab from './Chat';
import NotificationTab from './Notification';
import SearchTab from './Search';
import HomeTab from './index';


const Tab = createBottomTabNavigator();

const TabLayout = () => {
  return (
      <Tab.Navigator >
        <Tab.Screen name="Notification" component={NotificationTab} options={{tabBarActiveTintColor: 'red'}} />
        <Tab.Screen name="Search" component={SearchTab} />
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="Buddies" component={BuddiesTab} />
        <Tab.Screen name="Chat" component={ChatTab} />
      </Tab.Navigator>
  )
}

export default TabLayout
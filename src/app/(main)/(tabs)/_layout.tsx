import { Ionicons } from '@expo/vector-icons';
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
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        // sab pe common styling
        tabBarActiveTintColor: '#ff6347', // active color
        tabBarInactiveTintColor: '#787878', // inactive color
        tabBarLabelStyle: { display: 'none' },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';
          // sirf icon ka naam route ke hisaab se change karega
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Notification') {
            iconName = 'notifications';
          } else if (route.name === 'Search') {
            iconName = 'search';
          }
          else if (route.name === 'Buddies') {
            iconName = 'people';
          }
          else if (route.name === 'Chat') {
            iconName = 'chatbox-ellipses';
          }
          else {
            iconName = 'help-circle'; // fallback
          }


          return <Ionicons name={iconName} size={focused ? 28 : 24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Notification" component={NotificationTab} />
      <Tab.Screen name="Search" component={SearchTab} />
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Buddies" component={BuddiesTab} />
      <Tab.Screen name="Chat" component={ChatTab} />
    </Tab.Navigator>
  )
}

export default TabLayout
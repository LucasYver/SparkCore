import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import { useThemeColor } from '../components/Themed';
import { title, widthSize } from '../constants';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WalletScreen from '../screens/WalletScreen';
import { BottomTabParamList, HistoryParamList, ProfileParamList, WalletParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const useTheme = useThemeColor();

  return (
    <BottomTab.Navigator
      initialRouteName='Wallet'
      tabBarOptions={{
        activeTintColor: useTheme.activeTint,
        inactiveTintColor: useTheme.inactiveTint,
        tabStyle: {
          backgroundColor: useTheme.primary,
        },
      }}
    >
      <BottomTab.Screen
        component={WalletNavigator}
        name='Wallet'
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='university' color={color} />,
        }}
      />
      <BottomTab.Screen
        component={HistoryNavigator}
        name='History'
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='history' color={color} />,
        }}
      />
      <BottomTab.Screen
        component={ProfileNavigator}
        name='Profile'
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='user' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={widthSize(20)} style={{ marginBottom: -3 }} {...props} />;
}

const WalletStack = createStackNavigator<WalletParamList>();

function WalletNavigator() {
  const useTheme = useThemeColor();

  return (
    <WalletStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: useTheme.primary,
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
    >
      <WalletStack.Screen
        name='WalletScreen'
        component={WalletScreen}
        options={{ headerTitle: title }}
      />
    </WalletStack.Navigator>
  );
}
const HistoryStack = createStackNavigator<HistoryParamList>();

function HistoryNavigator() {
  const useTheme = useThemeColor();

  return (
    <HistoryStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: useTheme.primary,
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
    >
      <HistoryStack.Screen
        name='HistoryScreen'
        component={HistoryScreen}
        options={{ headerTitle: title }}
      />
    </HistoryStack.Navigator>
  );
}

const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  const useTheme = useThemeColor();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: useTheme.primary,
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
    >
      <ProfileStack.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{ headerTitle: title }}
      />
    </ProfileStack.Navigator>
  );
}

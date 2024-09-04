import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AdScreen from './screens/AdScreen';
import ProfileScreen from './screens/ProfileScreen';
import LeaderboardScreen from './screens/LeaderboardScreen';
import LoginScreen from './screens/LoginScreen';
import SettingsScreen from './screens/SettingsScreen';
import HowWeWorkScreen from './screens/HowWeWorkScreen';
import LinkBankAccountScreen from './screens/LinkBankAccountScreen';
import VerifyAccountScreen from './screens/VerifyAccountScreen';
import NotificationSettingsScreen from './screens/NotificationSettingsScreen';
import PrivacySettingsScreen from './screens/PrivacySettingsScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} isLoggedIn={isLoggedIn} />}
        </Stack.Screen>
        <Stack.Screen name="AdScreen" component={AdScreen} />
        <Stack.Screen name="Profile">
          {props => <ProfileScreen {...props} onLogin={handleLogin} />}
        </Stack.Screen>
        <Stack.Screen name="Leaderboard" component={LeaderboardScreen} />
        <Stack.Screen name="Login">
          {props => <LoginScreen {...props} onLogin={handleLogin} />}
        </Stack.Screen>
        <Stack.Screen name="Settings">
          {props => <SettingsScreen {...props} onLogin={handleLogin} />}
        </Stack.Screen>
        <Stack.Screen name="HowWeWorkScreen" component={HowWeWorkScreen} />
        <Stack.Screen name="LinkBankAccount" component={LinkBankAccountScreen} />
        <Stack.Screen name="VerifyAccount" component={VerifyAccountScreen} />
        <Stack.Screen name="NotificationSettings" component={NotificationSettingsScreen} />
        <Stack.Screen name="PrivacySettings" component={PrivacySettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

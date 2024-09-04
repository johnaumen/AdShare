import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Ensure you have this package installed

export default function HomeScreen({ navigation, isLoggedIn }) {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to light mode
  const styles = getStyles(isDarkMode);

  const toggleSwitch = () => {
    setIsDarkMode(previousState => !previousState);
  };

  const checkLoginAndNavigate = (screen) => {
    if (isLoggedIn) {
      navigation.navigate(screen);
    } else {
      navigation.navigate('Login', { screenToNavigate: screen });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: 'https://example.com/logo.png' }} style={styles.logo} />
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.userIcon} onPress={() => checkLoginAndNavigate('Profile')}>
            <Ionicons name="person-circle-outline" size={30} color={isDarkMode ? '#ffffff' : '#000000'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingsIcon} onPress={() => checkLoginAndNavigate('Settings')}>
            <Ionicons name="settings-outline" size={30} color={isDarkMode ? '#ffffff' : '#000000'} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.mainTitle}>AdShare</Text>
      <Text style={styles.title}>Watch Ads, Earn Money</Text>
      <View style={styles.adBox}>
        <Text style={styles.adText}>Ad Placeholder</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => checkLoginAndNavigate('AdScreen')}>
        <Text style={styles.buttonText}>Watch Now</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Leaderboard')}>
        <Text style={styles.buttonText}>Leaderboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => checkLoginAndNavigate('HowWeWorkScreen')}>
        <Text style={styles.buttonText}>How We Work</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 john</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={toggleSwitch}
          value={isDarkMode}
        />
      </View>
    </View>
  );
}

const getStyles = (isDarkMode) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: isDarkMode ? '#2c2c2c' : '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: isDarkMode ? '#1c1c1c' : '#ffffff',
  },
  logo: {
    width: 100,
    height: 50,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  userIcon: {
    padding: 10,
  },
  settingsIcon: {
    padding: 10,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: isDarkMode ? '#ffffff' : '#000000',
    marginVertical: 20,
  },
  title: {
    fontSize: 18,
    color: isDarkMode ? '#cccccc' : '#333333',
    marginBottom: 20,
  },
  adBox: {
    width: '90%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isDarkMode ? '#3c3c3c' : '#e0e0e0',
    marginBottom: 20,
  },
  adText: {
    fontSize: 16,
    color: isDarkMode ? '#ffffff' : '#000000',
  },
  button: {
    width: '90%',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: isDarkMode ? '#5c5c5c' : '#007bff',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: isDarkMode ? '#cccccc' : '#333333',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  switchLabel: {
    fontSize: 16,
    color: isDarkMode ? '#ffffff' : '#000000',
    marginRight: 10,
  },
});

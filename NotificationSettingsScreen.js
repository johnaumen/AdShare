import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function NotificationSettingsScreen() {
  const [isEmailEnabled, setIsEmailEnabled] = useState(true);
  const [isPushEnabled, setIsPushEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Settings</Text>
      <View style={styles.optionContainer}>
        <Text style={styles.label}>Email Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEmailEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() => setIsEmailEnabled(previousState => !previousState)}
          value={isEmailEnabled}
        />
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.label}>Push Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isPushEnabled ? "#f5dd4b" : "#f4f3f4"}
          onValueChange={() => setIsPushEnabled(previousState => !previousState)}
          value={isPushEnabled}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    marginRight: 10,
  },
});

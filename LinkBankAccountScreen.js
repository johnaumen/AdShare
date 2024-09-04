import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LinkBankAccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Link Bank Account</Text>
      <TextInput style={styles.input} placeholder="Bank Name" />
      <TextInput style={styles.input} placeholder="Account Number" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Routing Number" keyboardType="numeric" />
      <Button title="Link Account" onPress={() => { /* Implement linking logic */ }} />
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
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

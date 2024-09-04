import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default function HowWeWorkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How We Work</Text>
      <Text style={styles.subtitle}>Our Process</Text>
      <TextInput
        style={styles.textBox}
        placeholder="Step 1: Describe the first step..."
        multiline
      />
      <TextInput
        style={styles.textBox}
        placeholder="Step 2: Describe the second step..."
        multiline
      />
      <TextInput
        style={styles.textBox}
        placeholder="Step 3: Describe the third step..."
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  textBox: {
    width: '100%',
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

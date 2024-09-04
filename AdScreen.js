import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AdScreen({ navigation }) {
  const [adCompleted, setAdCompleted] = useState(false);
  const [earnings, setEarnings] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAdCompleted(true);
      setEarnings(earnings + 0.05); // Example earnings increment
    }, 5000); // Simulate a 5-second ad

    return () => clearTimeout(timer);
  }, [adCompleted, earnings]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ad is playing...</Text>
      {!adCompleted ? (
        <View style={styles.adContainer}>
          <Text style={styles.adText}>This is a fake ad. It will complete in 5 seconds.</Text>
        </View>
      ) : (
        <>
          <Text style={styles.subtitle}>Ad completed!</Text>
          <Button title="Play Next Ad" onPress={() => setAdCompleted(false)} />
        </>
      )}
      <Text style={styles.earnings}>Earnings: ${earnings.toFixed(2)}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  earnings: {
    fontSize: 16,
    marginVertical: 10,
  },
  adContainer: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
  },
  adText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

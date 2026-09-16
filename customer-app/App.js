import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';

export default function App() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');

  const findRide = () => {
    if (!pickup.trim()) {
      Alert.alert('Pickup required', 'Please enter your pickup location.');
      return;
    }

    if (!destination.trim()) {
      Alert.alert(
        'Destination required',
        'Please enter your destination.'
      );
      return;
    }

    Alert.alert(
      'Ride Search',
      From: ${pickup}\nTo: ${destination}
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>ARAMBAGH LOCAL</Text>
        <Text style={styles.subtitle}>Book Your Ride</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Pickup Location</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter pickup location"
            value={pickup}
            onChangeText={setPickup}
          />

          <Text style={styles.label}>Destination</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter destination"
            value={destination}
            onChangeText={setDestination}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={findRide}
          >
            <Text style={styles.buttonText}>FIND RIDE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.info}>
          <Text style={styles.infoTitle}>
            Welcome to Arambagh Local
          </Text>

          <Text style={styles.infoText}>
            Enter your pickup and destination to search for a ride.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
  },

  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },

  button: {
    marginTop: 25,
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#222222',
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },

  info: {
    marginTop: 25,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  infoText: {
    fontSize: 15,
    lineHeight: 22,
  },
});

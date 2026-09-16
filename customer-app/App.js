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
      Alert.alert(
        'Pickup required',
        'Please enter your pickup location.'
      );
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
      'Searching...',
      Searching for a ride from ${pickup} to ${destination}.
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>ARAMBAGH LOCAL</Text>

        <Text style={styles.subtitle}>
          Local Ride Booking
        </Text>

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
            <Text style={styles.buttonText}>
              Find Ride
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.info}>
          Fast and easy local ride booking in Arambagh.
        </Text>
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
    marginBottom: 30,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#ffffff',
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
    fontSize: 18,
    fontWeight: 'bold',
  },

  info: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 14,
  },
});

import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
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

    Alert.alert(   ScrollView,
} from 'react-native';

export default function App() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');


        'Ride Search',
        'Searching for a ride from ' +
    pickup. trim() +  ' to ' + 
    destination. trim() + '.'
    );
    

  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.smallTitle}>Welcome to</Text>
            <Text style={styles.appTitle}>Arambagh Local</Text>
          </View>

          <View style={styles.profileCircle}>
            <Text style={styles.profileText}>👤</Text>
          </View>
        </View>

        {/* Greeting */}
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>Where are you going?</Text>
          <Text style={styles.subtitle}>
            Enter your pickup and destination
          </Text>
        </View>

        {/* Location Card */}
        <View style={styles.locationCard}>
          {/* Pickup */}
          <View style={styles.locationRow}>
            <View style={styles.greenDot} />

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>PICKUP</Text>

              <TextInput
                style={styles.input}
                placeholder="Enter pickup location"
                placeholderTextColor="#999"
                value={pickup}
                onChangeText={setPickup}
              />
            </View>
          </View>

          {/* Connecting Line */}
          <View style={styles.line} />

          {/* Destination */}
          <View style={styles.locationRow}>
            <View style={styles.redDot} />

            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>DESTINATION</Text>

              <TextInput
                style={styles.input}
                placeholder="Where do you want to go?"
                placeholderTextColor="#999"
                value={destination}
                onChangeText={setDestination}
              />
            </View>
          </View>
        </View>

        {/* Current Location */}
        <TouchableOpacity
          style={styles.currentLocation}
          onPress={() => setPickup('Current Location')}
        >
          <Text style={styles.locationIcon}>📍</Text>

          <View>
            <Text style={styles.currentTitle}>Use current location</Text>
            <Text style={styles.currentSubtitle}>
              Set your pickup automatically
            </Text>
          </View>
        </TouchableOpacity>

        {/* Find Ride Button */}
        <TouchableOpacity
          style={styles.findButton}
          onPress={findRide}
          activeOpacity={0.8}
        >
          <Text style={styles.findButtonText}>Find a Ride</Text>
        </TouchableOpacity>

        {/* Quick Options */}
        <Text style={styles.sectionTitle}>Quick options</Text>

        <View style={styles.quickOptions}>
          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => setDestination('Arambagh Bus Stand')}
          >
            <Text style={styles.quickIcon}>🚌</Text>
            <Text style={styles.quickText}>Bus Stand</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => setDestination('Arambagh Railway Station')}
          >
            <Text style={styles.quickIcon}>🚉</Text>
            <Text style={styles.quickText}>Railway Station</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickCard}
            onPress={() => setDestination('Arambagh Hospital')}
          >
            <Text style={styles.quickIcon}>🏥</Text>
            <Text style={styles.quickText}>Hospital</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Local rides made simple
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },

  container: {
    padding: 20,
    paddingBottom: 40,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },

  smallTitle: {
    fontSize: 15,
    color: '#777',
    marginBottom: 3,
  },

  appTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#111',
  },

  profileCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
  },

  profileText: {
    fontSize: 25,
  },

  greetingBox: {
    marginBottom: 20,
  },

  greeting: {
    fontSize: 25,
    fontWeight: '700',
    color: '#111',
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: '#777',
  },

  locationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  greenDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#22A447',
    marginRight: 15,
  },

  redDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#E53935',
    marginRight: 15,
  },

  line: {
    height: 35,
    width: 2,
    backgroundColor: '#D5D5D5',
    marginLeft: 6,
  },

  inputContainer: {
    flex: 1,
  },

  inputLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#777',
    marginBottom: 3,
  },

  input: {
    height: 42,
    fontSize: 16,
    color: '#111',
    paddingVertical: 0,
  },

  currentLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 15,
    padding: 16,
    borderRadius: 15,
    elevation: 2,
  },

  locationIcon: {
    fontSize: 25,
    marginRight: 14,
  },

  currentTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
  },

  currentSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 3,
  },

  findButton: {
    height: 56,
    backgroundColor: '#111111',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  findButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#222',
    marginTop: 30,
    marginBottom: 14,
  },

  quickOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  quickCard: {
    backgroundColor: '#FFFFFF',
    width: '31%',
    minHeight: 105,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    elevation: 2,
  },

  quickIcon: {
    fontSize: 27,
    marginBottom: 8,
  },

  quickText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },

  footer: {
    textAlign: 'center',
    color: '#999',
    fontSize: 13,
    marginTop: 35,
  },
});
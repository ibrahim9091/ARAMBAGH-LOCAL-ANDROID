import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
            <Text style={styles.title}>Arambagh Local</Text>

                  <Text style={styles.subtitle}>
                          Welcome to Customer App
                                </Text>

                                      <Text style={styles.message}>
                                              Your app is ready!
                                                    </Text>
                                                        </View>
                                                          );
                                                          }

                                                          const styles = StyleSheet.create({
                                                            container: {
                                                                flex: 1,
                                                                    justifyContent: 'center',
                                                                        alignItems: 'center',
                                                                            padding: 20,
                                                                              },

                                                                                title: {
                                                                                    fontSize: 30,
                                                                                        fontWeight: 'bold',
                                                                                            marginBottom: 15,
                                                                                                textAlign: 'center',
                                                                                                  },

                                                                                                    subtitle: {
                                                                                                        fontSize: 20,
                                                                                                            marginBottom: 10,
                                                                                                                textAlign: 'center',
                                                                                                                  },

                                                                                                                    message: {
                                                                                                                        fontSize: 16,
                                                                                                                            textAlign: 'center',
                                                                                                                              },
                                                                                                                              });
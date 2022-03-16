import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  type User = {
    createdAt: Date;
    id: number;
    name: string;
  }

  const user: User = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>My name is {user.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

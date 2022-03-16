import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, Text, View } from 'react-native';

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

  const translation = useRef(
    new Animated.ValueXY({ x: 0, y: 0 })
  ).current

  useEffect(() => {
    Animated.sequence([
      Animated.spring(translation.x, {
        toValue: -100,
        useNativeDriver: true
      }),
      Animated.spring(translation.y, {
        toValue: -100,
        useNativeDriver: true
      }),
      Animated.spring(translation.x, {
        toValue: 100,
        useNativeDriver: true
      }),
      Animated.spring(translation.y, {
        toValue: 100,
        useNativeDriver: true
      }),
    ]).start()
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>My name is {user.name}</Text>
      <Animated.View style={{
          width:100, 
          height: 100,
          backgroundColor: "orange",
          transform: [
            { translateY: translation.y },
            { translateX: translation.x },
          ]
        }}
      />
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

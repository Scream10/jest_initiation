import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  type User = {
    createdAt: Date;
    id: number;
    name: string;
  }

  const [headerShown, setHeaderShown] = useState(false);

  const user: User = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'LeBron James',
  };

  const firstOpacity = useRef(
    new Animated.Value(0)
  ).current;

  const secondOpacity = useRef(
    new Animated.Value(0)
  ).current;

  const thirdOpacity = useRef(
    new Animated.Value(0)
  ).current;

  const translation = useRef(
    new Animated.Value(0)
  ).current;

  useEffect(() => {
    Animated.stagger(150, [
      Animated.timing(firstOpacity, {
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(secondOpacity, {
        toValue: 1,
        useNativeDriver: true
      }),
      Animated.timing(thirdOpacity, {
        toValue: 1,
        useNativeDriver: true
      })
    ]).start();

    Animated.timing(translation, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [])

  return (
    <>
      <View 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          backgroundColor: "tomato",
          transform: [
            {
              translateY: headerShown ? 0 : -100
            }
          ],
          zIndex: 10
        }}
      />

      <ScrollView
        onScroll={(event) => {
          const scrolling = event.nativeEvent.contentOffset.y;

          if (scrolling > 100) {
            setHeaderShown(true);
          } else {
            setHeaderShown(false);
          }
        }} 
        // onScroll will be fired every 16ms
        scrollEventThrottle={16} 
        style={{ flex: 1 }}
      >
        <View style={styles.container}>

          <Text>Open up App.js to start working on your app!</Text>
          <Text>My name is {user.name}</Text>

          <View>
            <Animated.View style={{
                width:100, 
                height: 100,
                backgroundColor: "orange",
                marginBottom: 10,
                marginTop: 50,
                opacity: firstOpacity,
              }}
            />
            <Animated.View style={{
                width:100, 
                height: 100,
                backgroundColor: "orange",
                marginBottom: 10,
                opacity: secondOpacity,
              }}
            />
            <Animated.View style={{
                width:100, 
                height: 100,
                backgroundColor: "orange",
                marginBottom: 10,
                opacity: thirdOpacity,
              }}
            />
          </View>

          <Animated.View style={{
              width:100, 
              height: 100,
              backgroundColor: "red",
              marginBottom: 10,
              opacity: translation.interpolate({
                inputRange: [0, 50, 100],
                outputRange: [0, 0.5, 1],
              }),
              transform: [
                { translateX: translation },
                { rotate: translation.interpolate({
                    inputRange: [0, 100],
                    outputRange: ['0deg', '360deg'],
                  }),
                },
              ],
            }}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 25,
    height: 1000,
  },
});

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Easing } from 'react-native';
import styles from '../assets/styles/styles';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [buttonAnimation] = useState(new Animated.Value(0));

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in...');
  };

  const animateButton = () => {
    Animated.timing(buttonAnimation, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const resetAnimation = () => {
    Animated.timing(buttonAnimation, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  const buttonScale = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.95],
  });

  const buttonStyle = {
    transform: [{ scale: buttonScale }],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={[styles.button, buttonStyle]}
        onPress={() => {
          animateButton();
          setTimeout(() => {
            handleLogin();
            resetAnimation();
          }, 300);
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

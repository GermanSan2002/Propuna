import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../components/Button';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Propuna</Text>
      <Text style={styles.subtitle}>Tu seguridad y clima, en uno</Text>
      <Button title="Iniciar Sesión" onPress={() => navigation.navigate('Login')} />
      <Button title="Registrarse" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },
});

export default WelcomeScreen;

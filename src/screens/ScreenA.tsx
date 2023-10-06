import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function ScreenA() {
  const navigation = useNavigation();
  function openScreen() {
    navigation.navigate('screenB');
  }
  function openScreen2() {
    navigation.navigate('screenC');
  }

  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Área de trabalho</Text>
      <Button
        title="Agendamento de Consulta"
        color="#007AFF" 
        onPress={openScreen}
      />
        <Button
        title="Pacientes Agendados"
        color="#007AFF" 
        onPress={openScreen2}
      />
    </View>
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

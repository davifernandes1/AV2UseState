import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

export function ScreenB() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');

  function handleAgendamento() {
    const paciente = {
      nome,
      cpf,
      dataNascimento,
      endereco,
    };

    console.log('Dados do paciente agendado:', paciente);

  
    setNome('');
    setCpf('');
    setDataNascimento('');
    setEndereco('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendamento de Consulta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCpf(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={(text) => setDataNascimento(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={(text) => setEndereco(text)}
      />

      <Button title="Agendar" onPress={handleAgendamento} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

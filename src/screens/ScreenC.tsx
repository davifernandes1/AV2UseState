import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const dadosConsultas = [
  {
    id: 1,
    paciente: 'Neymar Junior',
    dataConsulta: '2023-10-05',
    valorCobrado: 400.00,
    sintomas: 'Dores no joelho',
    medicamento: 'Anti-inflamatório',
  },
  {
    id: 2,
    paciente: 'Lionel Messi',
    dataConsulta: '2023-10-29',
    valorCobrado: 280.00,
    sintomas: 'Febre e dor de cabeça',
    medicamento: 'Analgésico',
  },
  {
    id: 3,
    paciente: 'Roger Guedes',
    dataConsulta: '2023-10-14',
    valorCobrado: 120.00,
    sintomas: 'Dor de garganta',
    medicamento: 'Ibuprofeno',
  },
  {
    id: 4,
    paciente: 'Cristiano Ronaldo',
    dataConsulta: '2023-11-17',
    valorCobrado: 350.00,
    sintomas: 'Dor nas costas',
    medicamento: 'Relaxante muscular',
  },
];

export function ScreenC() {
  const [consultaSelecionada, setConsultaSelecionada] = useState(null);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>Paciente: {item.paciente}</Text>

      <TouchableOpacity style={styles.btn} onPress={() => handleVisualizar(item)}>
        <Text style={styles.btnTxt}>
          {consultaSelecionada === item.id ? 'Ocultar' : 'Visualizar'}
        </Text>
      </TouchableOpacity>

      {consultaSelecionada === item.id && (
        <View style={styles.detalhesConsulta}>
          <Text>Data da Consulta: {item.dataConsulta}</Text>
          <Text>Valor Cobrado: R${item.valorCobrado.toFixed(2)}</Text>
          <Text>Sintomas: {item.sintomas}</Text>
          <Text>Medicamento: {item.medicamento}</Text>
        </View>
      )}
    </View>
  );

  function handleVisualizar(item) {
    if (consultaSelecionada === item.id) {
      // Se a consulta já está selecionada, deselecione-a
      setConsultaSelecionada(null);
    } else {
      // Caso contrário, selecione-a
      setConsultaSelecionada(item.id);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultas Agendadas</Text>
      <FlatList
        data={dadosConsultas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  btnTxt: {
    color: '#FFF',
    fontSize: 16,
  },
  detalhesConsulta: {
    backgroundColor: '#E0E0E0',
    padding: 16,
    marginTop: 10,
  },
});

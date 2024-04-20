import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { useFornecedores } from '../Context/FornecedoresContext';

const CadastroFornecedores = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categorias, setCategorias] = useState('');

  const { addFornecedor } = useFornecedores();

  const handleSubmit = () => {
    addFornecedor({ nome, endereco, contato, categorias });
    alert('Fornecedor Cadastrado!');
    navigation.navigate('ListaFornecedores');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Endereço:</Text>
      <TextInput
        style={styles.input}
        value={endereco}
        onChangeText={setEndereco}
      />

      <Text style={styles.label}>Contato:</Text>
      <TextInput
        style={styles.input}
        value={contato}
        onChangeText={setContato}
      />

      <Text style={styles.label}>Categorias de Produtos Fornecidos:</Text>
      <TextInput
        style={styles.input}
        value={categorias}
        onChangeText={setCategorias}
      />

      <Button
        title="Cadastrar Fornecedor"
        onPress={handleSubmit}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    marginBottom: 15,
    borderWidth: 1,
    padding: 10,
  },
});

export default CadastroFornecedores;
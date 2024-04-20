import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { useFornecedores } from '../Context/FornecedoresContext';
import { launchImageLibrary } from 'react-native-image-picker';

const CadastroFornecedores = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categorias, setCategorias] = useState('');
  const [imageUri, setImageUri] = useState('');

  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorCode);
      } else if (response.assets) {
        setImageUri(response.assets[0].uri);
      }
    });
  }

  const { addFornecedor } = useFornecedores();

  const handleSubmit = () => {
    addFornecedor({ nome, endereco, contato, categorias, imageUri });
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

      <Text style={styles.label}>Foto do Fornecedor:</Text>
      <Button title="Selecionar Imagem" onPress={selectImage} />
      {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : null}

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
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
});

export default CadastroFornecedores;
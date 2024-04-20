import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useFornecedores } from '../Context/FornecedoresContext';

const ListaFornecedores = () => {
    const { fornecedores } = useFornecedores();
  
    return (
      <ScrollView style={styles.container}>
        {fornecedores.map((fornecedor, index) => (
          <View key={index} style={styles.item}>
            <Image source={{ uri: fornecedor.imageUri }} style={styles.image} />
            <Text style={styles.text}>Nome: {fornecedor.nome}</Text>
            <Text style={styles.text}>Endereço: {fornecedor.endereco}</Text>
            <Text style={styles.text}>Contato: {fornecedor.contato}</Text>
            <Text style={styles.text}>Categorias: {fornecedor.categorias}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
    },
    item: {
      marginBottom: 20,
      padding: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      alignItems: 'center', 
    },
    text: {
      fontSize: 16,
    },
    image: {
      width: 100,
      height: 100, 
      borderRadius: 50, 
      marginBottom: 10, 
    },
  });

export default ListaFornecedores;
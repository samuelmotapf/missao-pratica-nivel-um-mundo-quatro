import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Sistema de Cadastro</Text>
      <Button style={styles.botaoHome}
        title="Cadastrar Fornecedor"
        onPress={() => navigation.navigate('CadastroFornecedores')}
      />
      <Button style={styles.botaoHome}
        title="Listar Fornecedores"
        onPress={() => navigation.navigate('ListaFornecedores')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  botaoHome: {
    marginTop: 5
  }
});

export default HomeScreen;
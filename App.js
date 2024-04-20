import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FornecedoresProvider } from './Context/FornecedoresContext';
import HomeScreen from './Pages/HomeScreen';
import CadastroFornecedores from './Pages/CadastroFornecedores';
import ListaFornecedores from './Pages/ListaFornecedores';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Tela Inicial' }}
      />
      <Stack.Screen
        name="CadastroFornecedores"
        component={CadastroFornecedores}
        options={{ title: 'Cadastro de Fornecedores' }}
      />
      <Stack.Screen
        name="ListaFornecedores"
        component={ListaFornecedores}
        options={{ title: 'Lista de Fornecedores' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <FornecedoresProvider>
        <MyStack />
      </FornecedoresProvider>
    </NavigationContainer>
  );
}
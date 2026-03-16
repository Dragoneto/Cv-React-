import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Contato from './Contato';
import Perfil from './Perfil';
import Config from './Config';
import Cadastro from './Cadastro';
import MensagemSalva from './MensagemSalva';
import Filmes from './Filmes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Filmes" component={Filmes} options={{ title: 'Filmes Populares' }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Contato" component={Contato} options={{ title: 'Fale Conosco' }} />
        <Stack.Screen name="Perfil" component={Perfil} options={{ title: 'Meu Perfil' }} />
        <Stack.Screen name="Config" component={Config} options={{ title: 'Configurações' }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Criar Conta' }} />
        <Stack.Screen name="MensagemSalva" component={MensagemSalva} options={{ title: 'Mensagem Recuperada' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
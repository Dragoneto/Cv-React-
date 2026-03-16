import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './Styles.js';

function Home({ navigation }) {
  return (
    <View style={styles.container_home}>
      <View style={styles.view_texto_contato}>
        <Text style={styles.texto_contato}>Bem-vindo</Text>
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Contato')}>
        <Text style={styles.textoBotao}>CONTATO</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.textoBotao}>PERFIL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Config')}>
        <Text style={styles.textoBotao}>CONFIGURAÇÕES</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.textoBotao}>CADASTRAR</Text>
      </TouchableOpacity>
    

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('MensagemSalva')}>
        <Text style={styles.textoBotao}>VER ÚLTIMA MENSAGEM</Text>
      </TouchableOpacity>
      </View>
  );
}

export default Home;
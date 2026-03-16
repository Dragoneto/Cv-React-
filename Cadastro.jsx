import React, { useState } from 'react';
import { View, TextInput, Text, Button, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Styles.js';

function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container_contato}>
      <TouchableOpacity 
        style={styles.container_icone_voltar_contato} 
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons name="arrow-left" size={30} color="purple" />
      </TouchableOpacity>

      <View style={styles.view_texto_contato}>
        <Text style={styles.texto_contato}>Crie sua Conta</Text>
      </View>

      <TextInput
        style={styles.input_contato}
        placeholder="Nome completo..."
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input_contato}
        placeholder="Seu melhor e-mail..."
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input_contato}
        placeholder="Crie uma senha..."
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />

      <Button 
        title="CADASTRAR" 
        color="purple" 
        onPress={() => alert('Cadastro realizado com sucesso!')} 
      />
    </View>
  );
}

export default Cadastro;
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles.js';
import { db } from './firebaseConfig.js';

function Contato({ navigation }) {
  const [text_nome, setText_nome] = useState('');
  const [text_email, setText_email] = useState('');
  const [message, setMessage] = useState('');

  
  const enviarMensagem = async () => {
 if (text_nome && text_email && message) {
 const novaMensagem = {
 nome: text_nome,
 email: text_email,
 mensagem: message,
 data: new Date().toISOString()
 };
try {
      await addDoc(collection(db, 'mensagens'), dadosMensagem);
      await AsyncStorage.setItem('@contato', JSON.stringify(dadosMensagem));

      const sucesso = 'Mensagem enviada e salva com sucesso!';
      Platform.OS === 'web' ? alert(sucesso) : Alert.alert('Sucesso', sucesso);

      setText_nome('');
      setText_email('');
      setMessage('');
      
      navigation.navigate('MensagemSalva');
    } catch (error) {
      const erroMsg = 'Erro ao processar: ' + error.message;
      Platform.OS === 'web' ? alert(erroMsg) : Alert.alert('Erro', erroMsg);
      console.error(error);
    }
  }
};
 };


  const salvarContato = async () => {
    try {
      const contato = {
        nome: text_nome,
        email: text_email,
        mensagem: message,
      };
      await AsyncStorage.setItem('@contato', JSON.stringify(contato));
      Alert.alert('Sucesso', 'Mensagem salva localmente!');
      setText_nome('');
      setText_email('');
      setMessage('');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os dados');
      console.error(error);
    }


  return (
    <View style={styles.container_contato}>
      <TouchableOpacity 
        style={styles.container_icone_voltar_contato} 
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons name="keyboard-backspace" size={40} color="purple" />
      </TouchableOpacity>

      <View style={styles.view_texto_contato}>
        <Text style={styles.texto_contato}>Entre em Contato Com o Davi</Text>
      </View>

      <TextInput
        style={styles.input_contato}
        placeholder="Digite seu nome..."
        value={text_nome}
        onChangeText={setText_nome}
      />

      <TextInput
        style={styles.input_contato}
        placeholder="Digite seu email..."
        value={text_email}
        onChangeText={setText_email}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.inputArea}
        placeholder="Escreva a sua mensagem aqui..."
        value={message}
        onChangeText={setMessage}
        multiline={true}
        numberOfLines={4}
      />

      <View>
 <Button title="Enviar" onPress={enviarMensagem} />
 </View>
 </View>
 );
}
  
 




export default Contato;
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebaseConfig.js';
import styles, { theme } from './Styles.js';

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
        await addDoc(collection(db, 'mensagens'), novaMensagem);
        await AsyncStorage.setItem('@contato', JSON.stringify(novaMensagem));

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
    } else {
      const aviso = 'Preencha todos os campos antes de enviar.';
      Platform.OS === 'web' ? alert(aviso) : Alert.alert('Atenção', aviso);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: theme.bg_primary }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.container_contato}>
          <TouchableOpacity style={styles.container_icone_voltar_contato} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="keyboard-backspace" size={24} color={theme.accent} />
          </TouchableOpacity>

          <View style={styles.view_texto_contato}>
            <Text style={styles.texto_contato}>Fale Comigo</Text>
            <Text style={{ color: theme.text_secondary, fontSize: 14, marginTop: 6 }}>Responderei em breve</Text>
          </View>

          <TextInput
            style={styles.input_contato}
            placeholder="Seu nome..."
            placeholderTextColor={theme.text_secondary}
            value={text_nome}
            onChangeText={setText_nome}
          />

          <TextInput
            style={styles.input_contato}
            placeholder="Seu e-mail..."
            placeholderTextColor={theme.text_secondary}
            value={text_email}
            onChangeText={setText_email}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.inputArea}
            placeholder="Escreva sua mensagem..."
            placeholderTextColor={theme.text_secondary}
            value={message}
            onChangeText={setMessage}
            multiline={true}
            numberOfLines={4}
          />

          <TouchableOpacity style={[styles.botao, { width: '100%', maxWidth: 440, flexDirection: 'row', justifyContent: 'center', gap: 10 }]} onPress={enviarMensagem}>
            <MaterialCommunityIcons name="send" size={18} color="#fff" />
            <Text style={styles.textoBotao}>ENVIAR MENSAGEM</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Contato;

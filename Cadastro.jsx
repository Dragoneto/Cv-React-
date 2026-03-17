import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { theme } from './Styles.js';

function Cadastro({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    if (!nome || !email || !senha) {
      const msg = 'Preencha todos os campos.';
      Platform.OS === 'web' ? alert(msg) : Alert.alert('Atenção', msg);
      return;
    }
    const msg = 'Cadastro realizado com sucesso!';
    Platform.OS === 'web' ? alert(msg) : Alert.alert('Sucesso', msg);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: theme.bg_primary }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
        <View style={styles.container_contato}>
          <TouchableOpacity style={styles.container_icone_voltar_contato} onPress={() => navigation.goBack()}>
            <MaterialCommunityIcons name="arrow-left" size={24} color={theme.accent} />
          </TouchableOpacity>

          <View style={styles.view_texto_contato}>
            <Text style={styles.texto_contato}>Criar Conta</Text>
            <Text style={{ color: theme.text_secondary, fontSize: 14, marginTop: 6 }}>Preencha seus dados abaixo</Text>
          </View>

          <TextInput
            style={styles.input_contato}
            placeholder="Nome completo..."
            placeholderTextColor={theme.text_secondary}
            value={nome}
            onChangeText={setNome}
          />

          <TextInput
            style={styles.input_contato}
            placeholder="Seu melhor e-mail..."
            placeholderTextColor={theme.text_secondary}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input_contato}
            placeholder="Crie uma senha..."
            placeholderTextColor={theme.text_secondary}
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity style={[styles.botao, { width: '100%', maxWidth: 440, marginTop: 6 }]} onPress={handleCadastro}>
            <Text style={styles.textoBotao}>CADASTRAR</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Cadastro;

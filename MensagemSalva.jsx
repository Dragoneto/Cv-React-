import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Platform, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles, { theme } from './Styles.js';

function MensagemSalva({ navigation }) {
  const [dados, setDados] = useState(null);

  const carregarDados = async () => {
    try {
      const valor = await AsyncStorage.getItem('@contato');
      if (valor !== null) {
        setDados(JSON.parse(valor));
      }
    } catch (error) {
      if (Platform.OS === 'web') {
        alert('Erro: Não foi possível carregar os dados');
      } else {
        Alert.alert('Erro', 'Não foi possível carregar os dados');
      }
      console.error(error);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  const campos = dados
    ? [
        { label: 'Nome',     value: dados.nome,     icon: 'account-outline',  color: '#FF6B6B' },
        { label: 'E-mail',   value: dados.email,    icon: 'email-outline',    color: '#4ECDC4' },
        { label: 'Mensagem', value: dados.mensagem, icon: 'message-outline',  color: '#A78BFA' },
      ]
    : [];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.bg_primary }} showsVerticalScrollIndicator={false}>
      <View style={[styles.container_contato, { alignItems: 'stretch' }]}>
        <TouchableOpacity style={styles.container_icone_voltar_contato} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="keyboard-backspace" size={24} color={theme.accent} />
        </TouchableOpacity>

        <View style={styles.view_texto_contato}>
          <Text style={styles.texto_contato}>Última Mensagem</Text>
          <Text style={{ color: theme.text_secondary, fontSize: 14, marginTop: 6 }}>Dados recuperados localmente</Text>
        </View>

        {dados ? (
          <View style={{ gap: 12, marginBottom: 32 }}>
            {campos.map((campo) => (
              <View key={campo.label} style={{ backgroundColor: theme.bg_card, borderRadius: 16, padding: 18, borderWidth: 1, borderColor: theme.border, flexDirection: 'row', alignItems: 'flex-start', gap: 14 }}>
                <View style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: campo.color + '22', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                  <MaterialCommunityIcons name={campo.icon} size={20} color={campo.color} />
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 11, color: theme.text_secondary, letterSpacing: 1, marginBottom: 4 }}>{campo.label.toUpperCase()}</Text>
                  <Text style={{ fontSize: 15, color: theme.text_primary, lineHeight: 22 }}>{campo.value}</Text>
                </View>
              </View>
            ))}
          </View>
        ) : (
          <View style={{ backgroundColor: theme.bg_card, borderRadius: 16, padding: 30, borderWidth: 1, borderColor: theme.border, alignItems: 'center', marginBottom: 32, gap: 12 }}>
            <MaterialCommunityIcons name="inbox-outline" size={40} color={theme.text_secondary} />
            <Text style={{ fontSize: 15, color: theme.text_secondary, textAlign: 'center' }}>Nenhuma mensagem encontrada.</Text>
          </View>
        )}

        <TouchableOpacity style={[styles.botao, { width: '100%' }]} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textoBotao}>VOLTAR PARA HOME</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default MensagemSalva;

import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Styles.js';

function Config({ navigation }) {
  return (
    <View style={styles.container_contato}>
      <TouchableOpacity 
        style={styles.container_icone_voltar_contato} 
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons name="arrow-left" size={30} color="purple" />
      </TouchableOpacity>

      <View style={styles.view_texto_contato}>
        <Text style={styles.texto_contato}>Configurações</Text>
      </View>

      <View style={{ padding: 10, backgroundColor: '#f0f0f0', borderRadius: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 18, marginBottom: 10 }}></Text>
        <Text style={{ fontSize: 18, marginBottom: 10 }}></Text>
        <Text style={{ fontSize: 18 }}></Text>
      </View>

      <Button 
        title="ALTERAR SENHA" 
        color="purple" 
        onPress={() => alert('Redirecionando...')} 
      />

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity 
          style={{ backgroundColor: '#ff4444', padding: 15, borderRadius: 5, alignItems: 'center' }}
          onPress={() => navigation.popToTop()}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>SAIR DA CONTA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Config;
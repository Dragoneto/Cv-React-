import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Styles.js';

function Perfil({ navigation }) {
  return (
    <View style={styles.container_contato}>
      <TouchableOpacity 
        style={styles.container_icone_voltar_contato} 
        onPress={() => navigation.goBack()}
      >
        <MaterialCommunityIcons name="keyboard-backspace" size={40} color="purple" />
      </TouchableOpacity>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Image 
          source={{ uri: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png' }} 
          style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 20 }} 
        />
        <Text style={styles.texto_contato}>Davi Almeida</Text>
        <Text style={{ fontSize: 18, marginBottom: 10 }}>26 anos</Text>
        <Text style={{ fontSize: 16, color: 'purple', marginBottom: 20 }}>Vendedor Remoto | Estudante de ADS</Text>
      </View>

      <View style={{ padding: 20, backgroundColor: '#f0f0f0', borderRadius: 10, marginBottom: 20, width: '100%', maxWidth: 400 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <MaterialCommunityIcons name="map-marker" size={24} color="purple" />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>Localização: Fortaleza, CE</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <MaterialCommunityIcons name="school" size={24} color="purple" />
          <Text style={{ fontSize: 16, marginLeft: 10 }}>Instituição: UNIFOR</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com')}>
            <MaterialCommunityIcons name="github" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')}>
            <MaterialCommunityIcons name="linkedin" size={40} color="#0077B5" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textoBotao}>VOLTAR PARA HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Perfil;
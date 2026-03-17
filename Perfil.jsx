import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { theme } from './Styles.js';

function Perfil({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.bg_primary }} showsVerticalScrollIndicator={false}>
      <View style={{ paddingHorizontal: 24, paddingTop: 20, paddingBottom: 40 }}>

        <TouchableOpacity style={styles.container_icone_voltar_contato} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="keyboard-backspace" size={24} color={theme.accent} />
        </TouchableOpacity>

        <View style={{ alignItems: 'center', marginTop: 32, marginBottom: 32 }}>
          <View style={{ width: 104, height: 104, borderRadius: 52, borderWidth: 3, borderColor: theme.accent, padding: 3, marginBottom: 18 }}>
            <Image
              source={{ uri: 'https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png' }}
              style={{ width: '100%', height: '100%', borderRadius: 48 }}
            />
          </View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: theme.text_primary, marginBottom: 4 }}>Davi Almeida</Text>
          <Text style={{ fontSize: 14, color: theme.accent2, marginBottom: 4 }}>Vendedor Remoto · Estudante de ADS</Text>
          <Text style={{ fontSize: 14, color: theme.text_secondary }}>26 anos</Text>
        </View>

        <View style={{ backgroundColor: theme.bg_card, borderRadius: 20, padding: 20, borderWidth: 1, borderColor: theme.border, marginBottom: 24 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: theme.border }}>
            <View style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: '#FF6B6B22', alignItems: 'center', justifyContent: 'center', marginRight: 14 }}>
              <MaterialCommunityIcons name="map-marker-outline" size={20} color={theme.accent} />
            </View>
            <View>
              <Text style={{ fontSize: 11, color: theme.text_secondary, marginBottom: 2 }}>LOCALIZAÇÃO</Text>
              <Text style={{ fontSize: 15, color: theme.text_primary }}>Fortaleza, CE</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 14 }}>
            <View style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: '#4ECDC422', alignItems: 'center', justifyContent: 'center', marginRight: 14 }}>
              <MaterialCommunityIcons name="school-outline" size={20} color={theme.accent2} />
            </View>
            <View>
              <Text style={{ fontSize: 11, color: theme.text_secondary, marginBottom: 2 }}>INSTITUIÇÃO</Text>
              <Text style={{ fontSize: 15, color: theme.text_primary }}>UNIFOR</Text>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: theme.bg_card, borderRadius: 20, padding: 20, borderWidth: 1, borderColor: theme.border, flexDirection: 'row', justifyContent: 'center', gap: 32, marginBottom: 24 }}>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com')} style={{ alignItems: 'center', gap: 6 }}>
            <View style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: '#ffffff15', alignItems: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="github" size={28} color={theme.text_primary} />
            </View>
            <Text style={{ fontSize: 12, color: theme.text_secondary }}>GitHub</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://linkedin.com')} style={{ alignItems: 'center', gap: 6 }}>
            <View style={{ width: 52, height: 52, borderRadius: 16, backgroundColor: '#0077B522', alignItems: 'center', justifyContent: 'center' }}>
              <MaterialCommunityIcons name="linkedin" size={28} color="#0077B5" />
            </View>
            <Text style={{ fontSize: 12, color: theme.text_secondary }}>LinkedIn</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.textoBotao}>VOLTAR PARA HOME</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

export default Perfil;

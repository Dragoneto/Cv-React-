import React from 'react';
import { View, Text, TouchableOpacity, Alert, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { theme } from './Styles.js';

function Config({ navigation }) {

  const handleAlterarSenha = () => {
    const msg = 'Redirecionando para alteração de senha...';
    Platform.OS === 'web' ? alert(msg) : Alert.alert('Alterar Senha', msg);
  };

  return (
    <View style={[styles.container_contato, { alignItems: 'stretch' }]}>
      <TouchableOpacity style={styles.container_icone_voltar_contato} onPress={() => navigation.goBack()}>
        <MaterialCommunityIcons name="arrow-left" size={24} color={theme.accent} />
      </TouchableOpacity>

      <View style={styles.view_texto_contato}>
        <Text style={styles.texto_contato}>Configurações</Text>
      </View>

      <View style={{ backgroundColor: theme.bg_card, borderRadius: 20, borderWidth: 1, borderColor: theme.border, overflow: 'hidden', marginBottom: 16 }}>
        <TouchableOpacity
          onPress={handleAlterarSenha}
          style={{ flexDirection: 'row', alignItems: 'center', padding: 18, borderBottomWidth: 1, borderBottomColor: theme.border }}
        >
          <View style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: '#A78BFA22', alignItems: 'center', justifyContent: 'center', marginRight: 14 }}>
            <MaterialCommunityIcons name="lock-outline" size={20} color="#A78BFA" />
          </View>
          <Text style={{ flex: 1, fontSize: 15, color: theme.text_primary }}>Alterar Senha</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.text_secondary} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', padding: 18 }}
          onPress={() => navigation.navigate('Perfil')}
        >
          <View style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: '#4ECDC422', alignItems: 'center', justifyContent: 'center', marginRight: 14 }}>
            <MaterialCommunityIcons name="account-edit-outline" size={20} color={theme.accent2} />
          </View>
          <Text style={{ flex: 1, fontSize: 15, color: theme.text_primary }}>Editar Perfil</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.text_secondary} />
        </TouchableOpacity>
      </View>

      <View style={{ backgroundColor: theme.bg_card, borderRadius: 20, borderWidth: 1, borderColor: theme.border, overflow: 'hidden' }}>
        <TouchableOpacity
          style={{ flexDirection: 'row', alignItems: 'center', padding: 18 }}
          onPress={() => navigation.popToTop()}
        >
          <View style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: '#FF6B6B22', alignItems: 'center', justifyContent: 'center', marginRight: 14 }}>
            <MaterialCommunityIcons name="logout" size={20} color={theme.accent} />
          </View>
          <Text style={{ flex: 1, fontSize: 15, color: theme.accent, fontWeight: '600' }}>Sair da Conta</Text>
          <MaterialCommunityIcons name="chevron-right" size={20} color={theme.accent} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Config;

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './Styles.js';

function MensagemSalva({ navigation }) {
                         const [dados, setDados] = useState(null);

                         const carregarDados = async () => {
                                                  try {
                                                                           const valor = await AsyncStorage.getItem('@contato');
                                                                           if (valor !== null) {
                                                                                                    const contatoRecuperado = JSON.parse(valor);
                                                                                                    setDados(contatoRecuperado);
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

                         return (
                                                  <View style={styles.container_contato}>
                                                                           <TouchableOpacity
                                                                                                    style={styles.container_icone_voltar_contato}
                                                                                                    onPress={() => navigation.goBack()}
                                                                           >
                                                                                                    <MaterialCommunityIcons name="keyboard-backspace" size={40} color="purple" />
                                                                           </TouchableOpacity>

                                                                           <View style={styles.view_texto_contato}>
                                                                                                    <Text style={styles.texto_contato}>Dados Recuperados</Text>
                                                                           </View>

                                                                           {dados ? (
                                                                                                    <View style={{ width: '100%', maxWidth: 400, padding: 20, backgroundColor: '#f4f4f4', borderRadius: 10 }}>
                                                                                                                             <Text style={{ fontWeight: 'bold', color: 'purple', fontSize: 18 }}>Nome:</Text>
                                                                                                                             <Text style={{ marginBottom: 15, fontSize: 16 }}>{dados.nome}</Text>

                                                                                                                             <Text style={{ fontWeight: 'bold', color: 'purple', fontSize: 18 }}>E-mail:</Text>
                                                                                                                             <Text style={{ marginBottom: 15, fontSize: 16 }}>{dados.email}</Text>

                                                                                                                             <Text style={{ fontWeight: 'bold', color: 'purple', fontSize: 18 }}>Mensagem:</Text>
                                                                                                                             <Text style={{ fontSize: 16 }}>{dados.mensagem}</Text>
                                                                                                    </View>
                                                                           ) : (
                                                                                                    <View style={{ padding: 20 }}>
                                                                                                                             <Text style={{ fontSize: 16, color: 'gray' }}>Nenhuma mensagem encontrada.</Text>
                                                                                                    </View>
                                                                           )}

                                                                           <TouchableOpacity
                                                                                                    style={[styles.botao, { marginTop: 30 }]}
                                                                                                    onPress={() => navigation.navigate('Home')}
                                                                           >
                                                                                                    <Text style={styles.textoBotao}>VOLTAR PARA HOME</Text>
                                                                           </TouchableOpacity>
                                                  </View>
                         );
}

export default MensagemSalva;
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles, { theme } from './Styles.js';

const Filmes = ({ navigation }) => {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = '6ff18f1664fb002eec1fd0f40f36177e';
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`;

  const fetchFilmes = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setFilmes(data.results);
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar filmes:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFilmes();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.bg_primary }}>
      <View style={{ paddingHorizontal: 24, paddingTop: 20 }}>
        <TouchableOpacity style={styles.container_icone_voltar_contato} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="keyboard-backspace" size={24} color={theme.accent} />
        </TouchableOpacity>
        <View style={styles.view_texto_contato}>
          <Text style={styles.texto_contato}>Filmes Populares</Text>
        </View>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color={theme.accent} style={{ marginTop: 60 }} />
      ) : (
        <FlatList
          data={filmes}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 40, gap: 16 }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', backgroundColor: theme.bg_card, borderRadius: 18, borderWidth: 1, borderColor: theme.border, overflow: 'hidden' }}>
              <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
                style={{ width: 90, height: 130 }}
              />
              <View style={{ flex: 1, padding: 14, justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold', color: theme.text_primary, lineHeight: 22 }} numberOfLines={2}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 13, color: theme.text_secondary, marginTop: 6, lineHeight: 18 }} numberOfLines={3}>
                  {item.overview}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 10 }}>
                  <MaterialCommunityIcons name="star" size={16} color="#F59E0B" />
                  <Text style={{ fontSize: 14, color: '#F59E0B', fontWeight: 'bold' }}>
                    {item.vote_average.toFixed(1)}
                  </Text>
                </View>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Filmes;

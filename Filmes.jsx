import React, { use, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ActivityIndicator, Platform, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './Styles.js'

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
<View style={styles.container.contato}>
<TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
<MaterialCommunityIcons name="keyboard-backspace" size={24} color="purple" />
<Text style={styles.buttonText}>Voltar</Text>
</TouchableOpacity>
 <view style={styles.view_texto_contato}>
<Text style={styles.texto_contato}>Filmes Populares</Text>
 </view>
{loading ? (
<ActivityIndicator size="large" color="purple" />
) : (                    
<FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 20, alignItems: 'center', width: '100%' }}>
              <Image 
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
                style={{ width: 200, height: 300, borderRadius: 10 }} 
              />
              <Text style={{ fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>{item.title}</Text>
              <Text style={{ color: 'gray' }}>Nota: {item.vote_average}</Text>
            </View>
          )}
          style={{ width: '100%' }}
        />
      )}
    </View>
  );
}

export default Filmes;
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

import psalms from '../../data/psalms';

const LetterList = () => {
  const navigation = useNavigation();

  function navigateToLetter(psalm) {
    navigation.navigate('Letter', { psalm });
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.search}>
        <TextInput style={styles.input} placeholder='Buscar Letra' />
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name='search' size={28} color='#fff' />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.main}
        data={psalms}
        showsVerticalScrollIndicator={false}
        keyExtractor={(psalm) => String(psalm.titulo)}
        renderItem={({ item: salmo }) => {
          const [primeiraEstrofe] = salmo.estrofes;

          return (
            <TouchableOpacity onPress={() => navigateToLetter(salmo)} style={styles.psalm}>
              <Text style={styles.title}>{salmo.titulo}</Text>

              {primeiraEstrofe.map((verse, index) => (
                <Text key={index} style={styles.paragraph}>
                  {verse.texto}
                </Text>
              ))}

              <View style={styles.line} />
            </TouchableOpacity>
          );
        }}
      />

      <Footer />
    </View>
  );
};

export default LetterList;

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

const LetterList = () => {
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
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => String(item)}
        renderItem={(item) => (
          <TouchableOpacity style={styles.psalm}>
            <Text style={styles.title}>Salmo 1b</Text>
            <Text style={styles.paragraph}>
              1. Quão bem aventurado é o homem que não anda Conforme as ímpias sugestões de
              conselheiros maus.
            </Text>
            <Text style={styles.paragraph}>
              1. Quão bem aventurado é o homem que não anda Conforme as ímpias sugestões de
              conselheiros maus.
            </Text>
            <View style={styles.line} />
          </TouchableOpacity>
        )}
      />

      <Footer />
    </View>
  );
};

export default LetterList;

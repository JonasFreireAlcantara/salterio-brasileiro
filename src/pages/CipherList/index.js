import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

const CipherList = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.search}>
        <TextInput style={styles.input} placeholder='Buscar Cifra' />
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name='search' size={28} color='#fff' />
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.main}
        data={[1, 2, 3, 4, 5]}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => String(item)}
        renderItem={(item) => (
          <TouchableOpacity style={styles.psalm}>
            <Text style={styles.title}>Salmo 1b</Text>

            <Text style={styles.cipher}>
              {'   F                        C7   Dm      C   F         Edim   F       C'}
            </Text>
            <Text style={styles.text}>Quão bem aventurado é o homem que não anda</Text>

            <Text style={styles.cipher}>
              {'C7                        Bb   F                   Gm          F    C7    F'}
            </Text>
            <Text style={styles.text}>Conforme as ímpias sugestões de conselheiros maus.</Text>

            <View style={styles.line} />
          </TouchableOpacity>
        )}
      />

      <Footer />
    </View>
  );
};

export default CipherList;

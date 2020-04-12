import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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

      <View style={styles.main}></View>

      <Footer />
    </View>
  );
};

export default LetterList;

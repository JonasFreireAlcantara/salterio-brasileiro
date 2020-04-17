import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

import psalms from '../../data/psalms.json';

const CipherList = () => {
  const navigation = useNavigation();

  function navigateToCipher(psalm) {
    navigation.navigate('Cipher', { psalm });
  }

  const psalmsWithCipher = psalms.filter((psalm) => psalm.stanzas[0][0].cipher !== undefined);

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
        data={psalmsWithCipher}
        showsVerticalScrollIndicator={false}
        keyExtractor={(psalm) => String(psalm.title)}
        renderItem={({ item: psalm }) => {
          const [firstStanza] = psalm.stanzas;

          return (
            <TouchableOpacity onPress={() => navigateToCipher(psalm)} style={styles.psalm}>
              <Text style={styles.title}>{psalm.title}</Text>

              {firstStanza.map((verse, index) => (
                <View key={index} style={styles.verse}>
                  <Text style={styles.cipher}>{verse.cipher}</Text>
                  <Text style={styles.text}>{verse.text}</Text>
                </View>
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

export default CipherList;

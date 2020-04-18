import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

import dataset from '../../data/psalms.json';

const psalmsWithCipher = dataset.filter((psalm) => psalm.stanzas[0][0].cipher !== undefined);

const CipherList = () => {
  const [search, setSearch] = useState('');
  const [psalms, setPsalms] = useState(psalmsWithCipher);

  const navigation = useNavigation();

  function navigateToCipher(psalm) {
    navigation.navigate('Cipher', { psalm });
  }

  function handleChangeSearch(text) {
    const result = psalmsWithCipher.filter((psalm) =>
      psalm.title.toLowerCase().includes(text.toLowerCase())
    );

    setSearch(text);
    setPsalms(result);
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.search}>
        <TextInput
          style={styles.input}
          placeholder='Buscar Cifra'
          value={search}
          onChangeText={(text) => handleChangeSearch(text)}
        />
      </View>

      <FlatList
        style={styles.main}
        data={psalms}
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

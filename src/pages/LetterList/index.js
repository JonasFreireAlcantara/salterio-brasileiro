import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

import dataset from '../../data/psalms.json';

const LetterList = () => {
  const [search, setSearch] = useState('');
  const [psalms, setPsalms] = useState(dataset);

  const navigation = useNavigation();

  function navigateToLetter(psalm) {
    navigation.navigate('Letter', { psalm });
  }

  function handleChangeSearch(text) {
    const result = dataset.filter((psalm) =>
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
          placeholder='Buscar Letra'
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
            <TouchableOpacity onPress={() => navigateToLetter(psalm)} style={styles.psalm}>
              <Text style={styles.title}>{psalm.title}</Text>

              {firstStanza.map((verse, index) => (
                <Text key={index} style={styles.paragraph}>
                  {verse.text}
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

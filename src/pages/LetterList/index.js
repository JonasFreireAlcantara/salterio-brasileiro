import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import psalmComparation from '../../utils/comparation';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

// import dataset from '../../data/psalms.json';

const LetterList = () => {
  const [search, setSearch] = useState('');
  const [psalms, setPsalms] = useState(dataset);
  const [dataset, setDataset] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    fetchPsalms();
  }, []);

  useEffect(() => {
    setPsalms(dataset);
  }, [dataset]);

  async function fetchPsalms() {
    const result = await axios.get('https://jonas-backend.herokuapp.com/api/psalms');

    const data = result.data.sort(psalmComparation);

    setDataset(data);
    setLoading(false);
  }

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

      {loading ? (
        <ActivityIndicator style={styles.main} size='large' color='#5a5a5a' />
      ) : (
        <FlatList
          style={styles.main}
          data={psalms}
          showsVerticalScrollIndicator={false}
          keyExtractor={(psalm) => String(psalm.title)}
          ItemSeparatorComponent={() => <View style={styles.line} />}
          renderItem={({ item: psalm }) => {
            const [firstStanza] = psalm.stanzas;

            return (
              <View style={styles.psalm}>
                <TouchableOpacity onPress={() => navigateToLetter(psalm)}>
                  <Text style={styles.title}>{psalm.title}</Text>

                  {firstStanza.slice(0, 2).map((verse, index) => (
                    <Text key={index} style={styles.paragraph}>
                      {verse.text}
                    </Text>
                  ))}
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}

      <Footer />
    </View>
  );
};

export default LetterList;

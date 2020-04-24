import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

const Letter = () => {
  const route = useRoute();

  const { psalm } = route.params;

  const { title, stanzas, melody, metric, composer, harmonization, letter } = psalm;

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.meta}>
          {melody && <Text style={styles.info}>{`Melodia: ${melody}`}</Text>}
          {metric && <Text style={styles.info}>{`Métrica: ${metric}`}</Text>}
          {composer && <Text style={styles.info}>{`Composição: ${composer}`}</Text>}
          {harmonization && <Text style={styles.info}>{`Harmonização: ${harmonization}`}</Text>}
          {letter && <Text style={styles.info}>{`Letra: ${letter}`}</Text>}
        </View>

        {stanzas.map((stanza, index) => (
          <View key={index} style={styles.stanza}>
            {stanza.map((verse, index) => (
              <Text key={index} style={styles.verse}>
                {verse.text}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>

      <Footer />
    </View>
  );
};

export default Letter;

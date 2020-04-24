import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

const Cipher = () => {
  const [loading, setLoading] = useState(true);
  const [component, setComponent] = useState({});

  const route = useRoute();

  const { psalm } = route.params;
  const { title, melody, metric, composer, harmonization, letter } = psalm;

  function renderComponent(psalm) {
    return new Promise((resolve, reject) => {
      const component = psalm.stanzas.map((stanza, index) => (
        <View key={index} style={styles.stanza}>
          {stanza.map((verse, index) => (
            <View key={index} style={styles.verse}>
              {verse.text.split('').map((character, index) => {
                const { cipher, text } = verse;
                const note = cipher[index];
                const letter = text[index];

                return (
                  <View key={index} style={styles.element}>
                    <Text style={styles.cipher}>{note}</Text>
                    <Text style={styles.text}>{letter}</Text>
                  </View>
                );
              })}
            </View>
          ))}
        </View>
      ));

      resolve(component);
    });
  }

  useEffect(() => {
    renderComponent(psalm).then((component) => {
      setComponent(component);
      setLoading(false);
    });
  }, [loading]);

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

        {loading ? (
          <ActivityIndicator style={styles.spinner} size='large' color='5a5a5a' />
        ) : (
          component
        )}
      </ScrollView>

      <Footer />
    </View>
  );
};

export default Cipher;

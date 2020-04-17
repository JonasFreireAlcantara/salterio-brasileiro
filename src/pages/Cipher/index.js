import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

const Cipher = () => {
  const route = useRoute();

  const { psalm } = route.params;

  const { title, stanzas } = psalm;

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
        <Text style={styles.title}>{title}</Text>

        {stanzas.map((stanza, index) => (
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
        ))}

        {/* {stanzas.map((stanza, index) => (
          <View key={index} style={styles.stanza}>
            {stanza.map((verse, index) => (
              <View key={index} style={styles.verse}>
                <Text style={styles.cipher}>{verse.cipher}</Text>
                <Text style={styles.text}>{verse.text}</Text>
              </View>
            ))}
          </View>
        ))} */}
      </ScrollView>

      <Footer />
    </View>
  );
};

export default Cipher;

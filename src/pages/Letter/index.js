import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

const Letter = () => {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
        <Text style={styles.title}>Salmo 1b</Text>

        <Text style={styles.stanza}>
          1. Quão bem aventurado é o homem que não anda Conforme as ímpias sugestões de conselheiros
          maus.
        </Text>

        <Text style={styles.stanza}>
          Não se detém no caminhar de homens pecadores Nem se assenta_em comunhão com o
          escarnecedor.
        </Text>

        <Text style={styles.stanza}>
          2. Porém, o seu prazer está na santa lei de Deus E dia_e noite nessa lei medita sem
          cessar.
        </Text>

        <Text style={styles.stanza}>
          3. Qual árvore plantada está junto das muitas águas Tal é_o homem, pois no tempo_o fruto
          próprio dá.
        </Text>

        <Text style={styles.stanza}>
          E murcha não será jamais toda_a sua folhagem. Bem-sucedido_ele será em tudo que fizer.
        </Text>

        <Text style={styles.stanza}>
          4. Os ímpios nunca são assim; são como_a palha ao vento. 5. No juízo_e na congregação dos
          justos, cairão.
        </Text>

        <Text style={styles.stanza}>
          6. Pois o Senhor conhece bem dos justos a vereda, Mas o caminho dos perversos, sim,
          perecerá.
        </Text>
      </ScrollView>

      <Footer />
    </View>
  );
};

export default Letter;

import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

const Cipher = () => {
  return (
    <View style={styles.container}>
      <Header />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
        <Text style={styles.title}>Salmo 1b</Text>

        <View style={styles.stanza}>
          <Text style={styles.cipher}>
            {'   F                        C7   Dm      C   F         Edim   F       C'}
          </Text>
          <Text style={styles.text}>Quão bem aventurado é o homem que não anda</Text>

          <Text style={styles.cipher}>
            {'C7                        Bb   F                   Gm          F    C7    F'}
          </Text>
          <Text style={styles.text}>Conforme as ímpias sugestões de conselheiros maus.</Text>
        </View>

        <View style={styles.stanza}>
          <Text style={styles.cipher}>
            {'  F                   C7  Dm           C   F        Edim  F      C'}
          </Text>
          <Text style={styles.text}>Não se detém no caminhar de homens pecadores</Text>

          <Text style={styles.cipher}>
            {' C7    F            Bb      F                        Gm      F   C7    F '}
          </Text>
          <Text style={styles.text}>Nem se assenta_em comunhão com o escarnecedor.</Text>
        </View>

        <View style={styles.stanza}>
          <Text style={styles.cipher}>
            {' F                   C7    Dm         C   F     Edim  F           C'}
          </Text>
          <Text style={styles.text}>Porém, o seu prazer está na santa lei de Deus </Text>

          <Text style={styles.cipher}>
            {'C7   F           Bb    F                  Gm       F    C7     F'}
          </Text>
          <Text style={styles.text}>E dia e noite nessa lei medita sem cessar. </Text>
        </View>

        <View style={styles.stanza}>
          <Text style={styles.cipher}>
            {'   F                        C7   Dm      C   F         Edim   F       C'}
          </Text>
          <Text style={styles.text}>Quão bem aventurado é o homem que não anda</Text>

          <Text style={styles.cipher}>
            {'C7                        Bb   F                   Gm          F    C7    F'}
          </Text>
          <Text style={styles.text}>Conforme as ímpias sugestões de conselheiros maus.</Text>
        </View>

        <View style={styles.stanza}>
          <Text style={styles.cipher}>
            {'   F                        C7   Dm      C   F         Edim   F       C'}
          </Text>
          <Text style={styles.text}>Quão bem aventurado é o homem que não anda</Text>

          <Text style={styles.cipher}>
            {'C7                        Bb   F                   Gm          F    C7    F'}
          </Text>
          <Text style={styles.text}>Conforme as ímpias sugestões de conselheiros maus.</Text>
        </View>

        <View style={styles.stanza}>
          <Text style={styles.cipher}>
            {'   F                        C7   Dm      C   F         Edim   F       C'}
          </Text>
          <Text style={styles.text}>Quão bem aventurado é o homem que não anda</Text>

          <Text style={styles.cipher}>
            {'C7                        Bb   F                   Gm          F    C7    F'}
          </Text>
          <Text style={styles.text}>Conforme as ímpias sugestões de conselheiros maus.</Text>
        </View>

        <View style={styles.stanza}>
          <Text style={styles.cipher}>
            {'   F                        C7   Dm      C   F         Edim   F       C'}
          </Text>
          <Text style={styles.text}>Quão bem aventurado é o homem que não anda</Text>

          <Text style={styles.cipher}>
            {'C7                        Bb   F                   Gm          F    C7    F'}
          </Text>
          <Text style={styles.text}>Conforme as ímpias sugestões de conselheiros maus.</Text>
        </View>
      </ScrollView>

      <Footer />
    </View>
  );
};

export default Cipher;

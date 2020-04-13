import React from 'react';
import { View, Text } from 'react-native';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

const About = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.main}>
        <Text style={styles.title}>O que é o Saltério ?</Text>

        <Text style={styles.about}>
          A CBS é uma comissão formada por membros reformados e confessionais da Igreja de Cristo.
          Cremos que os salmos devem ser entoados pelo povo de Deus espalhado sobre a face da terra
          e pretendemos contribuir com o seu uso por cristãos de fala portuguesa.
        </Text>

        <Text style={styles.about}>
          A CBS é uma comissão formada por membros reformados e confessionais da Igreja de Cristo.
          Cremos que os salmos devem ser entoados pelo povo de Deus espalhado sobre a face da terra
          e pretendemos contribuir com o seu uso por cristãos de fala portuguesa.
        </Text>

        <Text style={styles.about}>
          A CBS é uma comissão formada por membros reformados e confessionais da Igreja de Cristo.
          Cremos que os salmos devem ser entoados pelo povo de Deus espalhado sobre a face da terra
          e pretendemos contribuir com o seu uso por cristãos de fala portuguesa.
        </Text>
      </View>

      <Footer />
    </View>
  );
};

export default About;

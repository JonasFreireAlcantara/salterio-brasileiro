import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

import Logo from '../../assets/logo.png';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />

        <Text style={styles.title}>Comissão Brasileira de Salmodia</Text>
      </View>

      <View style={styles.main}>
        <Text style={styles.subtitle}>O que é o Saltério ?</Text>

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

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerItem}>
          <MaterialIcons name='book' size={28} color='#5a5a5a' />
          <Text style={styles.footerItemDescription}>Letra</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <MaterialIcons name='queue-music' size={28} color='#5a5a5a' />
          <Text style={styles.footerItemDescription}>Cifra</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.footerItem}>
          <MaterialCommunityIcons name='help' size={28} color='#5a5a5a' />
          <Text style={styles.footerItemDescription}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default About;

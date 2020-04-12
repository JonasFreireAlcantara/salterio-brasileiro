import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />

        <Text style={styles.title}>Comissão Brasileira de Salmodia</Text>
      </View>
    </View>
  );
};

export default Header;

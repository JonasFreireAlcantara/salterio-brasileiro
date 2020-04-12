import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Footer = () => {
  const navigation = useNavigation();

  function handleLetterClick() {
    navigation.navigate('LetterList');
  }

  function handleAboutClick() {
    navigation.navigate('About');
  }

  function handleCipherClick() {
    navigation.navigate('CipherList');
  }

  return (
    <View style={styles.footerShadow}>
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleLetterClick} style={styles.footerItem}>
          <MaterialIcons name='book' size={28} color='#5a5a5a' />
          <Text style={styles.footerItemDescription}>Letra</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCipherClick} style={styles.footerItem}>
          <MaterialIcons name='queue-music' size={28} color='#5a5a5a' />
          <Text style={styles.footerItemDescription}>Cifra</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleAboutClick} style={styles.footerItem}>
          <MaterialCommunityIcons name='help' size={28} color='#5a5a5a' />
          <Text style={styles.footerItemDescription}>Sobre</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;

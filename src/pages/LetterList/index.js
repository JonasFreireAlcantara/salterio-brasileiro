import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './styles';

import Logo from '../../assets/logo.png';

const LetterList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={Logo} />

        <Text style={styles.title}>Comissão Brasileira de Salmodia</Text>
      </View>

      <View style={styles.search}>
        <TextInput style={styles.input} placeholder='Buscar' />
        <TouchableOpacity style={styles.button}>
          <MaterialIcons name='search' size={28} color='#fff' />
        </TouchableOpacity>
      </View>

      <View style={styles.main}></View>

      <View style={styles.footerShadow}>
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
    </View>
  );
};

export default LetterList;

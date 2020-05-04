import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './styles';

const Letter = () => {
  const [sound, setSound] = useState(undefined);
  const [playing, setPlaying] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { psalm } = route.params;

  useEffect(() => {
    async function initializeSound() {
      if (!psalm.url) {
        return;
      }

      const soundObject = new Audio.Sound();
      await soundObject.loadAsync({
        uri: psalm.url,
      });

      setSound(soundObject);
    }

    initializeSound();
  }, []);

  useEffect(() => {
    if (!sound) {
      return;
    }

    sound.setOnPlaybackStatusUpdate((playbackStatus) => {
      if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
        sound.stopAsync();
        setPlaying(false);
      }
    });
  }, [sound]);

  useEffect(() => {
    navigation.addListener('blur', () => {
      if (sound !== undefined) {
        sound.pauseAsync();
        setPlaying(false);
      }
    });
  }, [sound]);

  const { title, stanzas, melody, metric, composer, harmonization, letter } = psalm;

  async function handlePressButton() {
    try {
      if (playing) {
        sound.pauseAsync();
      } else {
        sound.playAsync();
      }
    } catch (error) {
      console.log('Deu erro');
      alert('deu erro');
    }

    setPlaying(!playing);
  }

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
        <View style={styles.space} />
      </ScrollView>

      {sound && (
        <TouchableOpacity style={styles.play} onPress={handlePressButton}>
          {playing ? (
            <MaterialIcons name='pause' size={40} color='#ffffff' />
          ) : (
            <MaterialIcons name='play-arrow' size={40} color='#ffffff' />
          )}
        </TouchableOpacity>
      )}

      <Footer />
    </View>
  );
};

export default Letter;

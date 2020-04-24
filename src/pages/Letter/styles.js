import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24,
  },

  main: {
    flex: 1,
    // backgroundColor: 'red',
    marginTop: 30,
    marginHorizontal: -10,
  },

  title: {
    // backgroundColor: 'blue',
    color: '#5a5a5a',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 30,
  },

  meta: {
    marginTop: 20,
    marginBottom: 30,
  },

  info: {
    // backgroundColor: 'blue',
    color: '#5a5a5a',
    fontWeight: 'bold',
    fontSize: 13,
  },

  stanza: {
    marginBottom: 20,
  },

  verse: {
    color: '#5a5a5a',
    fontSize: 16,
  },
});

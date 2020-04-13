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
  },

  title: {
    // backgroundColor: 'blue',
    color: '#5a5a5a',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 30,
    textAlign: 'center',
  },

  stanza: {
    color: '#5a5a5a',
    fontSize: 17,
    marginBottom: 20,
    textAlign: 'center',
  },
});
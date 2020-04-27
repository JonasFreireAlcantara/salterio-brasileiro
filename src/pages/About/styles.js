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
  },

  title: {
    // backgroundColor: 'blue',
    color: '#5a5a5a',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 30,
  },

  about: {
    color: '#5a5a5a',
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'justify',
  },

  contributions: {
    marginTop: 10,
    fontWeight: 'bold',
    color: '#5a5a5a',
    fontSize: 12,
  },

  email: {
    marginLeft: 10,
    color: '#5a5a5a',
    fontSize: 12,
  },
});

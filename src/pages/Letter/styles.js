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

  space: {
    height: 80,
  },

  play: {
    position: 'absolute',
    bottom: 90,
    left: 20,
    backgroundColor: '#5a5a5a',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.25,
    elevation: 2,
  },
});

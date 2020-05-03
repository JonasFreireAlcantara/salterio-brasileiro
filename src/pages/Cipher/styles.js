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
    // backgroundColor: 'red',
    flex: 1,
    marginTop: 30,
    marginHorizontal: -10,
  },

  spinner: {
    // backgroundColor: 'blue',
    height: 150,
  },

  title: {
    // backgroundColor: 'blue',
    color: '#5a5a5a',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 30,
    // textAlign: 'center',
  },

  stanza: {
    // backgroundColor: 'red',
    color: '#5a5a5a',
    fontSize: 11,
    marginBottom: 50,
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

  verse: {
    // backgroundColor: 'green',
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  element: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'blue',
    // marginLeft: 1,
  },

  cipher: {
    // backgroundColor: 'green',
    fontWeight: 'bold',
    color: '#5a5a5a',
    fontSize: 12,
    fontFamily: 'monospace',
    margin: 0,
  },

  text: {
    // backgroundColor: 'red',
    color: '#5a5a5a',
    fontSize: 12,
    fontFamily: 'monospace',
  },
});

import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24,
  },

  search: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },

  input: {
    borderColor: '#5a5a5a',
    borderWidth: 1,
    flex: 1,
    height: 40,
    borderRadius: 5,
    paddingLeft: 5,
  },

  button: {
    backgroundColor: '#5a5a5a',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 20,
  },

  main: {
    // backgroundColor: 'red',
    flex: 1,
    marginTop: 30,
  },

  psalm: {
    // backgroundColor: 'blue',
    marginVertical: 10,
  },

  title: {
    // backgroundColor: 'green',
    fontWeight: 'bold',
    color: '#5a5a5a',
    marginBottom: 5,
    fontSize: 14,
  },

  paragraph: {
    // backgroundColor: 'red',
    color: '#5a5a5a',
    fontWeight: '100',
    fontSize: 13,
  },

  line: {
    borderBottomColor: '#cfcfcf',
    borderBottomWidth: 0.7,
    width: '100%',
  },
});

import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight + 20,
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
    width: 250,
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
    flex: 1,
    // backgroundColor: 'red',
  },

  footerShadow: {
    elevation: 3,
    marginHorizontal: -24,

    shadowColor: '#000',
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.25,
  },

  footer: {
    height: 70,
    marginTop: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footerItem: {
    width: 40,
    height: 50,
    marginHorizontal: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  footerItemDescription: {
    fontSize: 11,
    color: '#5a5a5a',
  },
});

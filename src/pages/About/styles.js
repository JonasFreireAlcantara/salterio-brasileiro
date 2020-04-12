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

  subtitle: {
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

  footer: {
    backgroundColor: 'blue',
    // margin: 20,
    // marginHorizontal: -24,
    height: 70,
    // shadowColor: '#000',
    // shadowRadius: 4,
    // shadowOffset: {
    //   width: 0,
    //   height: -1,
    // },
    // shadowOpacity: 0.25,
    elevation: 10,

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

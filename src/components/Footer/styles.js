import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  footerShadow: {
    elevation: 2,
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
    marginTop: 5,

    elevation: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
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

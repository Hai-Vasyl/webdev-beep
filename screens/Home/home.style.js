import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  logotype: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 50,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  logoTextAccent: {
    color: 'red',
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginVertical: 20,
  },
});

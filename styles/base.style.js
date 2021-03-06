import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
  container: {
    padding: 15,
    paddingBottom: 80,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  titleText: {
    fontSize: 26,
    marginLeft: 6,
  },
});

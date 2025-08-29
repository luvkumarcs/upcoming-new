import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  signInUpImage: {
    width: '100%',
    height: "60%",
    resizeMode: 'cover',
  },
  signinuptext: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
    textAlign: 'center',
  },
  blurContainer: {
    width: '100%',
    borderRadius: 20,
    paddingBlock: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)', // semi-transparent white border
    backgroundColor: 'rgba(255, 99, 71, 0.1)', // transparent white background
    alignItems: 'center',
    paddingInline: 16,
  },
});

export default styles;
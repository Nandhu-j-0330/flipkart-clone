import {Image, StyleSheet, Text, View} from 'react-native';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/flipkartlogo.png')}
        style={styles.image}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 260,
    height: 260,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 130,
  },
});
export default IntroScreen;

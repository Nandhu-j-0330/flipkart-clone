import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Highlights = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.highlightTxt}>Highlights</Text>
      <Text>{Item}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
  },
  highlightTxt: {
    color: 'black',
    fontWeight: '800',
    fontSize: 18,
  },
});
export default Highlights;

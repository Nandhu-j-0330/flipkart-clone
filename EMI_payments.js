import React, { Component,useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

const EmiValidation = () => {
    const [state, setState] = useState({
        Amount:'',
        Interest:'',
        Years:''
    })
    return (
      <View>
        <TextInput
        label='Amount'
        value={state.Amount}
        onChangeText={text => setState(text)}/>
      </View>
    );
  const styles = StyleSheet.create({
   
  })
}
export default EmiValidation;

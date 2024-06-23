import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {black} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Address = ({navigation,item}) => {
  const [name, setName] = useState('hp');
  const [phone, setPhone] = useState('45');
  const [pincode, setPincode] = useState('324');
  const [state, setState] = useState('faes');
  const [city, setCity] = useState('fsa');
  const [house, setHouse] = useState('af');
  const [road, setRoad] = useState('fae');
  const [isNextClicked, setIsNextClicked] = useState(false);

  const route = useRoute();
  const product = route.params;

  return (
    <View style={{marginVertical: 0}}>
      <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={26} color="black" />
        </TouchableOpacity>
        <Text style={[style.btntxt, {color: 'black', marginLeft: 10}]}>
          Add Delivery Address
        </Text>
      </View>

      <TextInput
        style={[
          style.TextInput,
          {borderColor: !name && isNextClicked ? 'red' : 'gray'},
        ]}
        placeholder="Full Name (Required)*"
        onChangeText={text => setName(text)}
        value={name}
        placeholderTextColor={'gray'}
      />
      <TextInput
        style={[
          style.TextInput,
          {borderColor: !phone && isNextClicked ? 'red' : 'gray'},
        ]}
        onChangeText={text => setPhone(text)}
        value={phone}
        placeholder="Phone Number Required"
        keyboardType="phone-pad"
        maxLength={10}
        placeholderTextColor={'gray'}
      />

      <View style={{flexDirection: 'row', width: '100%'}}>
        <TextInput
          style={[
            style.TextInput,
            {flex: 1, borderColor: !pincode && isNextClicked ? 'red' : 'gray'},
          ]}
          value={!pincode}
          onChangeText={text => setPincode(text)}
          placeholder="Pincode (Required)"
          keyboardType="numeric"
          maxLength={6}
          placeholderTextColor={'gray'}
        />
        <TextInput
          style={[
            style.TextInput,
            {flex: 1, borderColor: !state && isNextClicked ? 'red' : 'gray'},
          ]}
          value={state}
          onChangeText={text => setState(text)}
          placeholder="State (Required)*"
          placeholderTextColor={'gray'}
        />
      </View>
      <TextInput
        style={[
          style.TextInput,
          {borderColor: !city && isNextClicked ? 'red' : 'gray'},
        ]}
        onChangeText={text => setCity(text)}
        value={city}
        placeholder="City (Required)"
        placeholderTextColor={'gray'}
      />
      <TextInput
        style={[
          style.TextInput,
          {borderColor: !house && isNextClicked ? 'red' : 'gray'},
        ]}
        placeholder="House Number., Building Name (Required)*"
        placeholderTextColor={'gray'}
        onChangeText={text => setHouse(text)}
        value={house}
      />

      <TextInput
        style={[
          style.TextInput,
          {borderColor: !road && isNextClicked ? 'red' : 'gray'},
        ]}
        placeholder="Road name, Area, Colony (Required)"
        placeholderTextColor={'gray'}
        onChangeText={text => setRoad(text)}
        value={road}
      />
      <TouchableOpacity
        onPress={() => {
          setIsNextClicked(true);
          if(name&&phone&&pincode&&state&&city&&house&&road){
            navigation.navigate('payments',product)
          }
          
        }}
        style={style.nxtbutton}>
        <Text style={style.btntxt}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  TextInput: {
    borderWidth: 1,
    height: 40,
    borderColor: 'gray',
    margin: 10,
    color: 'black',
    padding: 10,
  },
  nxtbutton: {
    height: 40,
    margin: 20,
    color: 'green',
    borderWidth: 1,
    backgroundColor: '#e34c27',
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  btntxt: {
    color: 'white',
    fontSize: 20,
    fontSize:16,
    fontWeight:'500'
  },
});
export default Address;

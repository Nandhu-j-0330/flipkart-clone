import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native-paper';
// import {AsyncStorage} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Rating, AirbnbRating} from 'react-native-ratings';
import { useIsFocused } from '@react-navigation/native';
const powerbank = require('./assets/powerbank2.jpg');
const shoes = require('./assets/formalshoe.jpg');
const watch = require('./assets/watch.webp');
const earbuds = require('./assets/earbuds.jpg');

const ProductItem1 = [{
  name:'nanthu',
}];

const Wishlist = ({navigation}) => {
  const [list, setList] = useState([]);
  const isFocused = useIsFocused()
  //..async storage .. set data

  
  useEffect(() => {
  //..get data from async
  const getItemFromAsync = async () => {
    try {
      const savedItem = await AsyncStorage.getItem('storedObjItem');
      const currentSavedItem = JSON.parse(savedItem);
      setList(currentSavedItem)
      // console.log(currentSavedItem);
    } catch (error) {
      console.log(error);
    } 
  };
  getItemFromAsync();
  }, [isFocused]);  //..

  //...Remove data from async 
  // useEffect(()=>{
    const removeData = async () => {
      try{
       await AsyncStorage.removeItem('storedObjItem');
      }catch(err){
       console.log(err.message)
      }
     }
     removeData();
  // },[])


  return (
    <View style={{backgroundColor: 'lightgray', height: '100%'}}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('productDetail', {item})}>
            <View style={{backgroundColor: 'white', marginTop: 0.7}}>
              <View
                style={{
                  flexDirection: 'row',
                  padding: 10,
                }}>
                <Image
                  resizeMode="stretch"
                  source={item.imageURL}
                  style={{width: 100, height: 100}}
                />
                <View>
                  <View
                    style={{
                      marginTop: 0,
                      backgroundColor: 'white',
                      width: '100%',
                      padding: 10,
                      borderColor: 'gray',
                    }}>
                    <Text
                      style={[
                        styles.desctxt,
                        {fontSize: 18, marginLeft: 0, marginTop: 0},
                      ]}>
                      {item.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={[
                          styles.desctxt,
                          {color: 'green', marginLeft: 0},
                        ]}>
                        {item.offer}
                      </Text>
                      <Text
                        style={[
                          styles.desctxt,
                          {color: 'gray', textDecorationLine: 'line-through'},
                        ]}>
                        {item.firtprice}
                      </Text>
                      <Text
                        style={[
                          styles.desctxt,
                          {color: 'black', fontSize: 20},
                        ]}>
                        {item.finalprice}
                      </Text>
                    </View>
                    <View style={{alignItems: 'baseline', marginVertical: 8}}>
                      <Rating
                        type="custom"
                        ratingCount={5}
                        readonly
                        startingValue={item.rating}
                        imageSize={20}
                        ratingBackgroundColor="white"
                        ratingColor="#00bb00"
                      />
                    </View>

                    <Text
                      style={[
                        styles.desctxt,
                        {
                          fontSize: 14,
                          color: 'black',
                          marginLeft: 0,
                          marginTop: 0,
                        },
                      ]}>
                      Sold by authorised seller
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginVertical: 1,
                  alignItems: 'center',
                }}>
                <TouchableOpacity 
                onPress={removeData()}
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 6,
                    borderTopWidth: 0.7,
                    borderRightWidth: 0.7,
                    marginTop: 1,
                    borderColor: 'lightgray',
                  }}>
                  <MaterialCommunityIcons
                    name="delete"
                    size={26}
                    color="gray"
                  />
                  <Text style={styles.buttontxt}>Remove</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('address', item)}
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 6,
                    borderTopWidth: 0.7,
                    borderRightWidth: 0.7,
                    marginTop: 1,
                    borderColor: 'lightgray',
                  }}>
                  <MaterialCommunityIcons
                    name="lightning-bolt-outline"
                    size={26}
                    color="gray"
                  />
                  <Text style={styles.buttontxt}>Buy This Now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  txt: {
    color: 'black',
    fontSize: 20,
    marginHorizontal: 10,
    textAlign: 'left',
  },
  desctxt: {
    color: 'black',
    fontWeight: '700',
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '900',
    marginTop: 2,
  },
  button: {
    height: 40,
    width: 130,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: 'gray',
  },
  buttontxt: {
    color: 'gray',
    fontWeight: '700',
    fontSize: 16,
  },
});

export default Wishlist;

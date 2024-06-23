import React, {PureComponent, useState} from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import ProductDescription from './insidecontainertext';
import {useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Highlights from './producthighlights';
import {Item} from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
import HomePage from './Home';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {transparent} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

// import Heart from 'react-heart'

const ProductDetail = ({item, navigation}) => {
  const [active, setActive] = useState(false);
  const route = useRoute();
  const product = route.params.item;

  const storeItem = async (product) => {
    try {
      let savedItem = await AsyncStorage.getItem('storedObjItem');
      savedItem = JSON.parse(savedItem) || [];
      const isAlreadyExist = savedItem.find((list) => list.key === product.key);
      const newItem = isAlreadyExist ? [] : [product];
      await AsyncStorage.setItem(
        'storedObjItem',
        JSON.stringify([...savedItem, ...newItem])
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            padding: 6,
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={26} color="black" />
          </TouchableOpacity>
          <Text style={[{color: 'black', marginLeft: 10, padding: 8}]}></Text>
        </View>
        <ScrollView style={{flex: 0.8}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}>
            <Image
              position="relative"
              source={product.imageURL}
              style={{
                resizeMode: (width = '100%' ? 'cover' : 'contain'),
                width: '100%',
                height: 400,
              }}
            />
            <View style={{position: 'absolute', right: 10, top: 10}}>
              <TouchableOpacity
                onPress={() => {
                  const newActive = !active;
                  setActive(newActive);
                  if (newActive) {
                    storeItem(product);
                  }
                }}>
                <AntDesign
                  name={active == true ? 'heart' : 'hearto'}
                  size={24}
                  color={active == true ? 'red' : 'gray'}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: 0,
                backgroundColor: 'white',
                width: '100%',
                padding: 10,
                borderTopWidth: 1,
                borderColor: 'gray',
                borderBottomWidth: 1,
              }}>
              <Text style={[styles.desctxt, {fontSize: 18, marginLeft: 0}]}>
                {product.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Text style={[styles.desctxt, {color: 'green', marginLeft: 0}]}>
                  {product.offer}
                </Text>
                <Text
                  style={[
                    styles.desctxt,
                    {color: 'gray', textDecorationLine: 'line-through'},
                  ]}>
                  {product.firtprice}
                </Text>
                <Text style={[styles.desctxt, {color: 'black', fontSize: 20}]}>
                  {product.finalprice}
                </Text>
              </View>
              <View style={{alignItems: 'baseline', marginVertical: 8}}>
                <Rating
                  type="custom"
                  ratingCount={5}
                  readonly
                  startingValue={product.rating}
                  imageSize={20}
                  ratingBackgroundColor="white"
                  ratingColor="#00bb00"
                />
              </View>

              <Text
                style={[
                  styles.desctxt,
                  {fontSize: 14, color: 'black', marginLeft: 0},
                ]}>
                Sold by authorised seller
              </Text>
            </View>
            <View style={styles.hightlightContainer}>
              <Text style={styles.highlightHeaderTxt}>Highlights</Text>
              <Text style={styles.highlightBodyTxt}>{product.highlight1}</Text>
              <Text style={styles.highlightBodyTxt}>{product.highlight2}</Text>
              <Text style={styles.highlightBodyTxt}>{product.highlight3}</Text>
              <Text style={styles.highlightBodyTxt}>{product.highlight4}</Text>
              <Text style={styles.highlightBodyTxt}>{product.highlight5}</Text>
            </View>
            {/* <Highlights/> */}
          </View>
        </ScrollView>

        <View
          style={{
            flex: 0.1,
            backgroundColor: 'white',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('EmiValidation')}
            style={[styles.button, {backgroundColor: 'white'}]}>
            <Text style={styles.buttontxt}>Pay With EMI</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('address', product)}
            style={[styles.button, {borderWidth: 0}]}>
            <Text style={styles.buttontxt}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 130,
    borderRadius: 3,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttontxt: {
    color: 'black',
    fontWeight: '600',
  },
  desctxt: {
    color: 'black',
    fontWeight: '700',
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '900',
  },
  hightlightContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: 'white',
  },
  highlightHeaderTxt: {
    color: 'black',
    fontWeight: '800',
    fontSize: 18,
  },
  highlightBodyTxt: {
    fontSize: 14,
    color: 'gray',
    marginVertical: 2,
    marginLeft: 4,
    marginTop: 10,
    fontWeight: '700',
  },
});
export default ProductDetail;

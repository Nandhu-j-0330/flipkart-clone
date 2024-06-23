import React, {Component, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  Linking,
} from 'react-native';
import {List, RadioButton} from 'react-native-paper';
const PaymentPage = ({navigation, item}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [checked, setChecked] = useState('');

  const route = useRoute();
  console.log(route);
  const product = route.params;

  handleClick = () => {
    Linking.canOpenURL(this.props.url).then(supported => {
      if (supported) {
        Linking.openURL(this.props.url);
      } else {
        console.log("Don't know how to open URI: " + this.props.url);
      }
    });
  };

  return (
    <View>
      <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={26} color="black" />
        </TouchableOpacity>
        <Text style={[styles.text, {marginLeft: 20}]}>payments</Text>
      </View>

      {/* <TouchableOpacity  onPress={()=>setIsVisible(!isVisible)}>
      <View 
        style={{
          justifyContent: 'space-between',
          backgroundColor: 'orange',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding:10

        }}>
        <Text>Delivery Charges</Text>
        <Text>FREE</Text>
      </View></TouchableOpacity> */}

      {/* <View style={{  display: isVisible ? 'flex' : 'none',}}>
        <View
          style={{
            backgroundColor: 'red',
            flexDirection: 'row',
              justifyContent:'space-between',
              padding:10
          }}>
          <Text>Total Amount</Text>
          <Text>8988</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'blue',
            justifyContent: 'space-between',
            padding:10

          }}>
          <Text>price</Text>
          <Text>8000</Text>
        </View>
      </View> */}
      <List.Accordion
        style={[
          styles.border,
          {
            color: 'black',
            backgroundColor: 'white',
          },
        ]}
        title={
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'black', fontWeight: '700', fontSize: 16}}>
              Total Amount
            </Text>
          </View>
        }>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            display: 'flex',
            width: '100%',
            padding: 20,
          }}>
          <View>
            <Text style={{color: 'black', fontWeight: '500'}}>Price</Text>
          </View>
          <View>
            <Text style={{color: 'black', marginLeft: 30, fontWeight: '600'}}>
              {product.finalprice}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            display: 'flex',
            //  flex: 1,
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 20,
          }}>
          <View>
            <Text style={{color: 'black', fontWeight: '500'}}>
              Delivery Charges
            </Text>
          </View>
          <View>
            <Text style={[styles.btntxt, {color: 'green', fontWeight: '600'}]}>
              FREE
            </Text>
          </View>
        </View>
      </List.Accordion>

      <List.Accordion
        style={[{backgroundColor: 'white', color: 'black'}, styles.border]}
        titleStyle={{color: 'black'}}
        title="Net Banking"
        left={props => (
          <FontAwesome
            name="bank"
            size={24}
            color={'black'}
            style={{...props.style, alignContent: 'center'}}
          />
        )}>
        <View>
          <View
            style={{
              height: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton
              status={checked === 'HDFC' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('HDFC')}
            />
            <Text onPress={() => setChecked('HDFC')} style={styles.btntxt}>
              HDFC
            </Text>
          </View>
          {checked === 'HDFC' && (
            <View>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://netbanking.hdfcbank.com/netbanking/')
                }>
                <View style={styles.paybutton}>
                  <Text
                    style={[
                      styles.btntxt,
                      {fontSize: 14, textAlign: 'center'},
                    ]}>
                    Pay {product.finalprice}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View>
          <View
            style={{
              height: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton
              status={checked === 'ICICI' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('ICICI')}
            />
            <Text onPress={() => setChecked('ICICI')} style={styles.btntxt}>
              ICICI
            </Text>
          </View>
          {checked === 'ICICI' && (
            <View>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://www.icicibank.com/personal-banking/insta-banking/internet-banking',
                  )
                }>
                <View style={styles.paybutton}>
                  <Text
                    style={[
                      styles.btntxt,
                      {fontSize: 14, textAlign: 'center'},
                    ]}>
                    Pay {product.finalprice}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View>
          <View
            style={{
              height: 50,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <RadioButton
              status={checked === 'SBI' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('SBI')}
            />
            <Text onPress={() => setChecked('SBI')} style={styles.btntxt}>
              SBI
            </Text>
          </View>
          {checked === 'SBI' && (
            <View>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(
                    'https://retail.onlinesbi.sbi/retail/login.htm',
                  )
                }>
                <View style={styles.paybutton}>
                  <Text
                    style={[
                      styles.btntxt,
                      {fontSize: 14, textAlign: 'center'},
                    ]}>
                    Pay {product.finalprice}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </List.Accordion>

      <List.Accordion
        title="Cash On Delivery"
        titleStyle={{color: 'black'}}
        style={{backgroundColor: 'white'}}
        left={nanthu => (
          <FontAwesome
            name="rupee"
            size={30}
            color="black"
            style={{...nanthu.style, marginRight: 10}}
          />
        )}>
        <View>
          <Text
            style={[
              styles.btntxt,
              {
                color: 'gray',
                fontWeight: '500',
                textAlign: 'left',
                padding: 20,
                marginLeft: 0,
              },
            ]}>
            Due to handling cost , a nominal fee of ₹5 will be charged
          </Text>
          <TouchableOpacity style={styles.paybutton}>
            <Text style={[styles.btntxt, {textAlign: 'center'}]}>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </List.Accordion>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 22,
  },
  button: {
    width: 70,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btntxt: {
    color: 'black',
    fontSize: 16,
    fontWeight: '700',
    width: '100%',
    marginLeft: 20,
  },
  paybutton: {
    backgroundColor: 'yellow',
    padding: 10,
    alignItems: 'center',
    marginRight: 20,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
});
export default PaymentPage;

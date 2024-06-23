import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';

const ProductDescription = ({title, size,finalprice,firtprice,offer})=>{
    return (
        <View style={{width:'100%',marginBottom:10,alignItems:'center',padding:{size},marginTop:10}}>
        <Text ellipsizeMode='tail' numberOfLines={1} style={{color: 'black',fontWeight:'600',width:'80%',textAlign:'center',backgroundColor:'white'}}>{title}</Text>
        <View style={{flexDirection:'row',width:'100%',alignItems:'center',marginLeft:36}}>
        <Text style={{color: 'gray',fontWeight:'600',textDecorationLine:'line-through',fontSize:14}}>{firtprice}</Text>
        <Text  style={{color: 'black',fontWeight:'800',marginLeft:10,fontSize:14}}>{finalprice}</Text>
        <Text style={{color: 'green',fontWeight:'600',marginLeft:10,fontSize:14, width:'100%' }}>{offer}</Text>
        </View></View>
      );
}
   export default ProductDescription;
  


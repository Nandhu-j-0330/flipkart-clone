import {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SearchBar from 'react-native-search-bar';
import ImageSlider from './imageslider';
import Textalign from './insidecontainertext';
import {Button, useTheme} from 'react-native-paper';
import ProductDescription from './insidecontainertext';
import {PrivateValueStore} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Wishlist from './wishlist';

// import Heart from "react-heart"


const powerbank = require('./assets/powerbank2.jpg');
const shoes = require('./assets/formalshoe.jpg');
const watch = require('./assets/watch.webp');
const earbuds = require('./assets/earbuds.jpg');

const mensshirts = require('./assets/jean-shirt.jpg');
const menstshirts = require('./assets/Menst-shirt.jpg');
const menstracksuits = require('./assets/menstracksuits.jpeg');
const streetwearpant = require('./assets/Streetwearpant.webp');
const casualpant = require('./assets/men-casual-pant.webp');
const printedshirt = require('./assets/printedshirt.webp');



const {width, height} = Dimensions.get('window');

const ProductItem1 = [
  {
    key: 1,
    name: 'Power Bank',
    firtprice: 6000,
    finalprice: '₹5,299',
    offer: 'Min.12% Off',
    imageURL: powerbank,
    rating: 4.4,
    highlight1: 'Fabric: Jean',
    highlight2: 'Sleeve: Full Sleve',
    highlight3: 'Pattern: Solid',
    highlight4: 'Coller: Spread',
    highlight5: 'Color: Black',
  },
  {
    key: 2,
    name: 'Formal Shoe',
    firtprice: 2500,
    finalprice: '₹2,300',
    offer: 'Min.40% Off',
    imageURL: shoes,
    rating: 3,
    highlight1: 'Fabric: Cotton Blend',
    highlight2: 'Sleeve: Half Sleve',
    highlight3: 'Pattern: Solid',
    highlight4: 'Coller: Round-Neck',
    highlight5: 'Color: Yellow',
  },
  {
    key: 3,
    name: 'Ear-Buds',
    offer: 'Min.10% Off',
    firtprice: 2000,
    finalprice: '₹1,800',
    imageURL: earbuds,
    rating: 3.2,
    highlight1: 'Fabric: Cotton Blend',
    highlight2: 'Type: Track Suits',
    highlight3: 'Pattern: Solid',
    highlight4: 'Size: Medium',
    highlight5: 'Color: Gray',
  },
  {
    key: 4,
    name: 'Watch',
    finalprice: '₹5200',
    firtprice: 5500,
    offer: 'Min.5.5% Off',
    imageURL: watch,
    rating: 3.5,
    highlight1: 'Fabric: Cotton Blend',
    highlight2: 'Type: Pant',
    highlight3: 'Pattern: Solid',
    highlight4: 'Size: Large',
    highlight5: 'Color: Shadow Brown',
  },
];

const ProductItem = [
  {
    key: 1,
    name: 'Jean Shirts',
    firtprice: 580,
    finalprice: '₹464',
    offer: 'Min.20% Off',
    imageURL: mensshirts,
    rating: 4.4,
    highlight1: 'Fabric: Jean',
    highlight2: 'Sleeve: Full Sleve',
    highlight3: 'Pattern: Solid',
    highlight4: 'Coller: Spread',
    highlight5: 'Color: Black',
  },
  {
    key: 2,
    name: 'Cotton T-Shirt',
    firtprice: 600,
    finalprice: '₹450',
    offer: 'Min.40% Off',
    imageURL: menstshirts,
    rating: 3.5,
    highlight1: 'Fabric: Cotton Blend',
    highlight2: 'Sleeve: Half Sleve',
    highlight3: 'Pattern: Solid',
    highlight4: 'Coller: Round-Neck',
    highlight5: 'Color: Yellow',
  },
  {
    key: 3,
    name: 'Mens Tracksuits',
    firtprice: 550,
    finalprice: '₹495',
    offer: 'Min.10% Off',
    imageURL: menstracksuits,
    rating: 1.1,
    highlight1: 'Fabric: Cotton Blend',
    highlight2: 'Type: Track Suits',
    highlight3: 'Pattern: Solid',
    highlight4: 'Size: Medium',
    highlight5: 'Color: Gray',
  },
  {
    key: 4,
    name: 'Street Wear Pants',
    firtprice: 1200,
    finalprice: '₹940',
    offer: 'Min.20% Off',
    imageURL: streetwearpant,
    rating: 5,
    highlight1: 'Fabric: Cotton Blend',
    highlight2: 'Type: Pant',
    highlight3: 'Pattern: Solid',
    highlight4: 'Size: Large',
    highlight5: 'Color: Shadow Brown',
  },
  {
    key: 5,
    name: 'Casual Pants',
    firtprice: 700,
    finalprice: '₹630',
    offer: 'Min.10% Off',
    imageURL: casualpant,
    rating: 0.5,
    highlight1: 'Fabric: Polyster',
    highlight2: 'Type: Pant',
    highlight3: 'Pattern: Solid',
    highlight4: 'Size: Large',
    highlight5: 'Color: Multi-Color',
  },
  {
    key: 6,
    name: 'Printed Shirts',
    firtprice: 1200,
    finalprice: '₹1080',
    offer: 'Min.15% Off',
    imageURL: printedshirt,
    rating: 3.2,
    highlight1: 'Fabric: Cotton Blend',
    highlight2: 'Sleeve: Full Sleve',
    highlight3: 'Pattern: Printed',
    highlight4: 'Coller: Spread',
    highlight5: 'Color: Light blue',
  },
];

const images = [
  {
    url: 'https://www.sahivalue.com/product-images/14+pro+max.jpg/293890000021697778/400x400',
    text: 'I phone ',
    navigationText: '',
  },
  {
    url: 'https://www.lavamobiles.com/images2/card-feature-phones.jpg',
    text: 'lava mobile',
  },
  {
    url: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-84513/IQOO7-Legend-featured-image-packshot-review.jpg',
    text: 'Mi mobile',
  },
];

const productInfo = [
  {
    name: 'Google Pixal 7 (128) GB',
    firtprice: 58000,
    finalprice: '₹52,200',
    offer: '10% Off',
    imageURL: require('./assets/googlephone8.webp'),
    rating: 3.5,
    highlight1: 'RAM: 16GB || ROM: 128GB ROM',
    highlight2: 'Display: 5.0 inch',
    highlight3: 'Processor: Google Tensor G2',
    highlight4: 'Front Camera: 20MP',
    highlight5: 'Battery: 3800 mAh',
  },
  {
    name: 'Google Pixal 6 (64) GB',
    firtprice: 54000,
    finalprice: '₹48,600',
    offer: '10% Off',
    imageURL: require('./assets/googlephone8.webp'),
    rating: 4,
    highlight1: 'RAM: 4GB || ROM: 64GB ROM',
    highlight2: 'Display: 5.2 inch',
    highlight3: 'Processor : Google Tensor G1',
    highlight3: 'Processor : Google Tensor G1',
    highlight4: 'Front Camera : 12MP',
    highlight5: 'Battery : 4000 mAh',
  },
  {
    name: 'Samsung Galaxy',
    firtprice: 67000,
    finalprice: '₹59,630',
    offer: '11% Off',
    imageURL: require('./assets/samsung.jpg'),
    rating: 4.5,
    highlight1: 'RAM: 16GB || ROM: 246GB ROM',
    highlight2: 'Display: 5.5 inch',
    highlight3: 'Processor : Snapdragon 910 5G Octo-core',
    highlight4: 'Front Camera : 22MP',
    highlight5: 'Battery : 3500 mAh',
  },
];

const Drawer = createDrawerNavigator();
const DrawerNavigator = navigation => {
  return(
    <Drawer.Navigator initialRouteName='Home'
    screenOptions={{header:() => null}}>
      <Drawer.Screen name='Home' component={HomePage}/>
      <Drawer.Screen name='Wishlist' component={Wishlist}/>
    </Drawer.Navigator>
  )
}

const HomePage = ({navigation, item}) => {
// const [active, setActive] = useState(false);
 const openDrawer = () => {
  return  navigation.openDrawer();
 }

  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={openDrawer}>
            <Feather 
            size={30}
            name="menu" 
            color="gray" />
          </TouchableOpacity>
          <Text
            style={{
              color: 'blue',
              fontSize: 24,
              fontWeight: '600',
              marginLeft: 16,
            }}>
            Flipkart
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <EvilIcons color="black" name="user" size={30} />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.hederlogintext}>Login</Text>
          </TouchableOpacity>

          <AntDesign
            color="black"
            name="shoppingcart"
            size={22}
            style={{marginLeft: 16}}
          />
        </View>
      </View>
      <ScrollView>
        <View>
          <ImageSlider
            images={images}
            renderOverlay={item => {
              return (
                <View
                  style={{
                    position: 'absolute',
                    display: 'flex',
                    zIndex: 1,
                    width: '100%',
                    height: '100%',
                    top: 20,
                    left: 20,
                  }}>
                  <Text style={{color: 'gray', fontSize: 22,textAlign:'center'}}>
                    {'Top Selling Smartphones'}
                  </Text>
                  <Text
                    style={{
                      color: 'gray',
                      fontWeight: '500',
                      marginVertical: 8,
                    }}>
                    {'Latest Technology, Best Brands'}
                  </Text>

                  <View style={{flex: 0.5, width: 120,justifyContent:'flex-end'}}>
                    <Button
                      icon="chevron-right"
                      mode="outlined"
                      compact
                      style={{
                        borderRadius: 6,
                        backgroundColor: 'white',
                        width: 100,
                      }}
                      contentStyle={{flexDirection: 'row-reverse'}}
                      onPress={() => console.log('Pressed')}>
                      Explore
                    </Button>
                  </View>
                </View>
              );
            }}
          />
        </View>

        {/* <View style={styles.header}>
        <SearchBar placeholder="Search..." />
      </View> */}

        {/* flatlist horizondal */}   
        <View style={{backgroundColor: 'white'}}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal>
            <FlatList
              data={ProductItem1}
              keyExtractor={item => item.key}
              numColumns={Math.ceil(ProductItem.length)}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('productDetail', {item})}>
                  <View
                    style={{
                      backgroundColor: 'wheat',
                      borderRadius: 6,
                      margin: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                     
                    <Image
                      style={{
                        width: width / 3 - 12,
                        height: 134,
                        borderTopRightRadius: 6,
                        borderTopLeftRadius: 6,
                      }}
                      source={item.imageURL}
                    />
                    <Text
                      style={{
                        color: 'black',
                        marginTop: 4,
                        marginTop: 0,
                        fontWeight: '600',
                      }}>
                      {item.name}
                    </Text>
                    {/* <Text style={{color: 'black', marginBottom: 4}}>
                      {item.offer}
                    </Text> */}
                  </View>
                </TouchableOpacity>
              )}
            />
          </ScrollView>
        </View>

        {/* Season Top Pics */}

        <View style={{backgroundColor: 'white', marginTop: 2}}>
          <Text
            style={{
              color: '#525CEB',
              margin: 4,
              marginLeft: 16,
              fontSize: 16,
              marginBottom: 10,
            }}>
            Seasons Top Picks
          </Text>
          <FlatList
            numColumns={2}
            keyExtractor={item => item.key}
            style={{flexDirection: 'column'}}
            data={ProductItem}
            renderItem={({item}) => (
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 6,
                  marginLeft: 10,
                  marginBottom: 10,
                  marginRight: 10,
                  flex: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{width: '100%'}}
                  onPress={() =>
                    navigation.navigate('productDetail', {
                      item: item,
                    })
                  }>
                  <Image
                    style={{
                      width: '100%',
                      height: 120,
                      borderTopRightRadius: 6,
                      borderTopLeftRadius: 6,
                    }}
                    source={item.imageURL}
                  />
                  <Text
                    style={{
                      color: 'black',
                      marginTop: 4,
                      marginLeft: 10,
                      fontWeight: '600',
                      fontSize: 16,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: 'black',
                      marginBottom: 4,
                      marginLeft: 10,
                      color: 'green',
                      fontSize: 12,
                    }}>
                    {item.offer}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            // backgroundColor:colors.background,
            borderRadius: 4,
            flex: 0.1,
          }}>
          <View
            style={{
              flex: 0.6,
              borderRadius: 4,
              borderTopWidth: 1,
              borderLeftWidth: 1,
              borderBottomWidth: 1,
              borderColor: 'gray',
              padding: 10,
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('productDetail', {
                  item: productInfo[0],
                })
              }>
              <View style={{width: '100%', height: 300}}>
                <Image
                  source={productInfo[0].imageURL}
                  style={{
                    resizeMode: 'cover',
                    width: '100%',
                    height: '100%',
                    marginTop: 10,
                  }}
                />
              </View>
            </TouchableOpacity>

            <ProductDescription
              title={productInfo[0].name}
              firtprice={productInfo[0].firtprice}
              finalprice={productInfo[0].finalprice}
              offer={productInfo[0].offer}
            />
          </View>

          <View
            style={{
              flexDirection: 'column',
              flex: 0.4,
              resizeMode: 'center',
              borderWidth: 1,
              borderColor: 'gray',
              width: '100%',
              height: 'auto',
            }}>
            <View
              style={{
                height: '50%',
                overflow: 'hidden',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('productDetail', {
                    item: productInfo[1],
                  })
                }>
                <Image
                  source={productInfo[1].imageURL}
                  style={{
                    height: '68%',
                    marginBottom: 1,
                    width: '100%',
                    borderBottomWidth: 1,
                    borderColor: 'blue',
                    resizeMode: 'center',
                  }}
                />
                <ProductDescription
                  title={productInfo[1].name}
                  firtprice={productInfo[1].firtprice}
                  finalprice={productInfo[1].finalprice}
                />
              </TouchableOpacity>
            </View>

            <View style={{borderBottomWidth: 1, borderColor: 'gray'}} />

            <View style={{height: '50%', justifyContent: 'space-evenly'}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('productDetail', {
                    item: productInfo[2],
                  })
                }>
                <Image
                  source={productInfo[2].imageURL}
                  style={{
                    height: '58%',
                    width: '100%',
                    resizeMode: 'contain',
                    marginTop: 10,
                  }}
                />
                <ProductDescription
                  title={productInfo[2].name}
                  firtprice={productInfo[2].firtprice}
                  finalprice={productInfo[2].finalprice}
                />
              </TouchableOpacity>
            </View>

            <View style={{borderBottomWidth: 1, borderColor: 'gray'}}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  hederlogintext: {
    fontSize: 20,
    color: 'black',
    marginLeft: 2,
    textAlign: 'center',
  },
  viewBoxContainer: {
    backgroundColor: 'violet',
  },
});

export default DrawerNavigator;

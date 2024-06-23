import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { PaperProvider,MD3LightTheme as DefaultTheme } from 'react-native-paper';
import IntroScreen from './Intro';
import LoginScreen from './login';
import ProductDetail from './productDetail';
import Address from './address';
import PaymentPage from './payment';
import EmiValidation from './EMI_payments';
import Wishlist from './wishlist';
import DrawerNavigator from './Home';
const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    secondary: 'yellow',
    background:'#41C9E2'
  },
};

const App = () => {

  return (
    <>
        <PaperProvider theme={theme} >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='HomeScreen'>
          <Stack.Screen
            name="Intro"
            component={IntroScreen}
          />
          <Stack.Screen name='HomeScreen' component={DrawerNavigator}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='productDetail' component={ProductDetail}/>
        <Stack.Screen name='address' component={Address}/>
        <Stack.Screen name='payments' component={PaymentPage}/>
        <Stack.Screen name='EmiValidation' component={EmiValidation}/>
        <Stack.Screen name='wishlist' component={Wishlist}/>
        </Stack.Navigator>
      </NavigationContainer>
      </PaperProvider>
    </>
  );
};
export default App;

// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home" 
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ drawerLabel: 'Home' }} 
        />
        <Drawer.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{ drawerLabel: 'My Cart' }} 
        />
        <Drawer.Screen 
          name="ProductDetail" 
          component={ProductDetailScreen} 
          options={{ drawerLabel: 'Product Details' }} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

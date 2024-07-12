import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require('../pictures/Menu.png')}
          style={styles.menuIcon}
        />
      </TouchableOpacity>
      <Image source={require('../pictures/Logo.png')} 
      style={styles.headerIcons}/>
      
      <Image source={require('../pictures/Search.png')} />
            <Image source={require('../pictures/shoppingBag.png')} />
           
      
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: '#fff',
    elevation: 4,
    marginTop: 30,
    
  },
  menuIcon: {
    width: 24,
    height: 24,
    
  },
  headerIcons: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
    marginLeft: 15,
  },

});

export default CustomHeader;

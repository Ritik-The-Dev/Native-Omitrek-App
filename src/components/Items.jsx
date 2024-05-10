import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { icons } from '../constants';

const Items = ({img, name, mrp, discountedPrice}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={icons.cancel} style={styles.Cancel} resizeMode="contain" />
        <Image source={img} style={styles.image} resizeMode="contain" />
      </View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.discountedPrice}>${discountedPrice}</Text>
        <Text style={styles.mrp}>${mrp}</Text>
        <Text style={styles.discountRate}>(${mrp - discountedPrice} off)</Text>
      </View>
      <View style={styles.BuyCartbutton}>
        <TouchableOpacity activeOpacity={0.7} style={styles.Cartbutton}>
          <Text style={styles.CartbuttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={styles.Buybutton}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Cancel:{
    position:'absolute',
    top:15,
    right:15
  },
  BuyCartbutton: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  discountedPrice: {
    color: 'black',
    height: 20,
    fontWeight: '900',
    marginTop: 4,
    marginLeft: 10,
    fontSize: 10,
    lineHeight: 18,
  },
  mrp: {
    height: 20,
    fontWeight: '900',
    marginTop: 4,
    marginLeft: 10,
    fontSize: 8,
    lineHeight: 18,
    textDecorationLine: 'line-through',
  },
  discountRate: {
    color: '#23B05B',
    height: 20,
    fontWeight: '900',
    marginTop: 4,
    marginLeft: 10,
    fontSize: 8,
    lineHeight: 18,
  },
  container: {
    marginBottom: 20,
    width: 175,
    height: 300,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  imageContainer: {
    backgroundColor: '#D9D9D9',
    width: 175,
    height: 190,
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 119,
    height: 119,
  },
  name: {
    width: 96,
    textAlign: 'left',
    marginTop: 5,
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 18,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Buybutton: {
    backgroundColor: '#23B05B',
    width: 71,
    height: 29,
    borderRadius: 6,
    padding: 2,
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
  },
  Cartbutton: {
    backgroundColor: '#D9D9D9',
    width: 71,
    height: 29,
    borderRadius: 6,
    padding: 2,
    marginTop: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 2,
  },
  buttonText: {
    color: 'white',
    width: 47,
    height: 20,
    marginTop: 5,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
  CartbuttonText: {
    color: '#23B05B',
    width: 47,
    height: 20,
    marginTop: 5,
    fontSize: 9,
    lineHeight: 12,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Items;

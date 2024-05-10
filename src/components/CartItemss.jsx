import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {icons} from '../constants';

const CartItems = ({
  setWishlistItems,
  index,
  img,
  name,
  desc,
  seller,
  quantity,
  size,
  mrp,
  discountedPrice,
  wishlistItems
}) => {

  const DeleteItem = () => {
    const filteredItems = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(filteredItems);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.image} resizeMode="contain" />
      </View>
      <View>
      <TouchableOpacity onPress={()=>DeleteItem()}>
      <Image source={icons.smallCancel} style={styles.Cancel} resizeMode="contain" /></TouchableOpacity>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.desc}>{truncateDesc(desc)}</Text>
        <Text style={styles.seller}>Sold by: {seller}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginBottom: 10,
            marginTop: 10,
          }}>
          <View style={styles.size}>
            <Text>Size: {size}</Text>
            <Image
              source={icons.smallarrowDown}
              style={{
                marginLeft: 10,
                height: 4,
                width: 8,
              }}
            />
          </View>
          <View style={styles.quantity}>
            <Text>Qty: {quantity}</Text>
            <Image
              source={icons.smallarrowDown}
              style={{
                marginLeft: 10,
                height: 4,
                width: 8,
              }}
            />
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.discountedPrice}>₹{discountedPrice}</Text>
          <Text style={styles.mrp}>₹{mrp}</Text>
          <Text style={styles.discountRate}>
            ({Math.floor((discountedPrice / mrp) * 100)}% off)
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quantity: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  seller: {
    lineHeight: 30,
  },
  desc: {
    color: 'black',
    lineHeight: 20,
  },
  size: {
    backgroundColor: '#FFFFFF',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight:10
  },
  Cancel: {
    position: 'absolute',
    top: 10,
    right: 15,
  },
  BuyCartbutton: {
    justifyContent: 'space-around',
    marginTop: 10,
  },
  discountedPrice: {
    color: 'black',
    height: 20,
    fontWeight: '900',
    marginTop: 4,
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 18,
  },
  mrp: {
    height: 20,
    fontWeight: '900',
    marginTop: 4,
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 18,
    textDecorationLine: 'line-through',
  },
  discountRate: {
    color: '#23B05B',
    height: 20,
    fontWeight: '900',
    marginTop: 4,
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 18,
  },
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  imageContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 119,
    height: 119,
  },
  name: {
    textAlign: 'left',
    marginTop: 5,
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 30,
    color: 'black',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  Buybutton: {
    backgroundColor: '#23B05B',
    width: 71,
    height: 29,
    borderRadius: 6,
    padding: 2,
    marginTop: 4,
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

export default CartItems;

// Function to truncate the description to display only 10 words
const truncateDesc = desc => {
  // Split the description into words
  const words = desc.split(' ');
  // Check if the number of words is greater than 10
  if (words.length > 6) {
    // Select the first 10 words and join them with a space
    const truncatedDesc = words.slice(0, 6).join(' ');
    // Add ellipsis at the end
    return truncatedDesc + '...';
  } else {
    // Return the original description if it contains 10 or fewer words
    return desc;
  }
};

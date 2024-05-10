import {
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {View} from 'react-native-animatable';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons, images} from '../constants';
import CartItems from '../components/CartItemss';
import {useEffect, useState} from 'react';

const Cart = () => {
  const [Offers, setOffers] = useState([]);
  const [orderStatus, setOrderStatus] = useState([]);
  const [orderDetails, setOrderDetails] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [addressDetails, setAddressDetails] = useState({});

  useEffect(() => {
    setOrderStatus([
      {name: 'Bag', status: true},
      {name: 'Address', status: false},
      {name: 'Payment', status: false},
    ]);
    setAddressDetails({
      PinCode: '208021',
    });
    setOrderDetails([
      {
        name: 'Jaipur Kurti',
        desc: 'Women Blue & Green Printed Straight Kurti',
        soldBy: 'Truecom Retails',
        mrp: 1649,
        price: 824,
        size: 'M',
        quantity: 1,
        img: images.product1,
      },
      {
        name: 'Mens Color Grey Round',
        desc: 'Mens Grey & Green Printed Shaded Rounded Trouser',
        soldBy: 'Truenuim Retails',
        mrp: 1649,
        price: 824,
        size: 'M',
        quantity: 1,
        img: images.product2,
      },
    ]);
    setOffers([
      {
        Offer:
          '10% Instant Discount on Citi-branded Credit and Debit Cards on a minimum spend of ₹3,000. TCA',
      },
      {
        Offer:
          '10% Instant Discount on Citi-branded Credit and Debit Cards on a minimum spend of ₹3,000. TCA',
      },
      {
        Offer:
          '10% Instant Discount on Citi-branded Credit and Debit Cards on a minimum spend of ₹3,000. TCA',
      },
      {
        Offer:
          '10% Instant Discount on Citi-branded Credit and Debit Cards on a minimum spend of ₹3,000. TCA',
      },
    ]);
  }, []);

  const getSavedAmmount = () => {
    let mrp = 0;
    let discountedPrice = 0;
    orderDetails.map(e => {
      mrp += e.mrp;
      discountedPrice += e.price;
    });
    return Math.round(mrp - discountedPrice);
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{flexGrow: 1, top: 50}}>
        <View>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.headerdiv1}>
              <View style={styles.imageDiv}>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={icons.leftarrowsmall}
                />
              </View>
              <View style={styles.headerDiv}>
                <Text style={styles.headertext}>Shopping Bag</Text>
              </View>
            </View>
          </View>

          {/* Order Status */}
          <View style={styles.HeaderimageDiv}>
            {orderStatus &&
              orderStatus.map((e, index) => {
                return (
                  <View key={index} style={styles.orderStatus}>
                    <View
                      key={index}
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 5,
                        marginRight: -2,
                        width: 50,
                        backgroundColor: `${e.status ? '#23B05B' : '#D9D9D9'}`,
                        height: 5,
                      }}
                    />
                    <View
                      style={{
                        backgroundColor: `${e.status ? '#23B05B' : '#D9D9D9'}`,
                        borderRadius: 8,
                        width: 8,
                        height: 8,
                        marginRight: 10,
                        marginTop: 5,
                      }}
                    />
                    <Text
                      style={{
                        marginRight: 10,
                      }}>
                      {e.name}
                    </Text>
                  </View>
                );
              })}
          </View>

          {/* Pincode Details*/}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 20,
              marginTop: 20,
              backgroundColor: '#D9D9D9',
            }}>
            <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
              Deliver to:{' '}
              <Text style={{fontWeight: '500'}}>{addressDetails.PinCode}</Text>
            </Text>
            <Text style={{color: '#A83943', fontWeight: '500', fontSize: 18}}>
              Change
            </Text>
          </View>

          {/* Available Offers*/}
          <View
            style={{
              alignItems: 'flex-start',
              padding: 20,
              marginTop: 20,
              backgroundColor: '#D9D9D9',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={images.Offers}
                style={{
                  marginRight: 10,
                }}
              />
              <Text style={{fontWeight: '500', color: 'black', fontSize: 18}}>
                Available Offers
              </Text>
            </View>
            {Offers.map((e, index) => {
              return showMore ? (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    marginTop: 10,
                  }}>
                  <View
                    style={{
                      borderRadius: 8,
                      marginTop: 10,
                      marginRight: 20,
                      height: 10,
                      width: 10,
                      backgroundColor: 'white',
                    }}
                  />
                  <Text
                    style={{fontWeight: '400', color: 'black', fontSize: 14}}>
                    {e.Offer}
                  </Text>
                </View>
              ) : (
                index === 0 && (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-start',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        borderRadius: 8,
                        marginTop: 10,
                        marginRight: 20,
                        height: 10,
                        width: 10,
                        backgroundColor: 'white',
                      }}
                    />
                    <Text
                      style={{fontWeight: '400', color: 'black', fontSize: 14}}>
                      {e.Offer}
                    </Text>
                  </View>
                )
              );
            })}
            {Offers.length > 1 && (
              <TouchableOpacity onPress={() => setShowMore(!showMore)}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                    marginLeft: 24,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{fontWeight: '400', color: '#A83943', fontSize: 16}}>
                    {showMore ? 'Show Less' : 'Show More'}
                  </Text>
                  <Image
                    source={icons.arrowDown}
                    style={{
                      marginLeft: 10,
                      marginTop: 4,
                    }}
                  />
                </View>
              </TouchableOpacity>
            )}
          </View>

          {/* Saving Discount Details*/}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 20,
              marginTop: 20,
              backgroundColor: '#B9D9C5',
            }}>
            <Text style={{fontWeight: '300', color: 'black', fontSize: 18}}>
              Your’re saving{' '}
              <Text style={{fontWeight: '5s00', color: '#23B05B'}}>
                {`₹${getSavedAmmount()}`}
              </Text>{' '}
              on this order
            </Text>
            <Image
              source={icons.offers}
              style={{
                marginTop: 5,
                height: 22,
                width: 24,
              }}
            />
          </View>

          {/* Items Length Details*/}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 20,
              marginTop: 10,
              marginBottom: 70,
            }}>
            <Text style={{fontWeight: '400', color: 'black', fontSize: 18}}>
              {orderDetails.length} Items Selected
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <TouchableOpacity>
                <Image
                  source={icons.share}
                  style={{
                    marginTop: 5,
                    height: 22,
                    width: 24,
                    marginRight: 20,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setOrderDetails([])}>
                <Image
                  source={icons.deletes}
                  style={{
                    marginTop: 5,
                    height: 22,
                    width: 18,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Wishlist Items */}
          <View style={styles.WishlistDiv}>
            <FlatList
              data={orderDetails}
              keyExtractor={(item, index) => index.toString()}
              numColumns={1} // Display two items in a row
              renderItem={({item, index}) => (
                <View style={styles.wishlistItems}>
                  <CartItems
                    setWishlistItems={setOrderDetails}
                    wishlistItems={orderDetails}
                    index={index}
                    name={item.name}
                    desc={item.desc}
                    seller={item.soldBy}
                    mrp={item.mrp}
                    discountedPrice={item.price}
                    img={item.img}
                    quantity={item.quantity}
                    size={item.size}
                  />
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
      {/* Place Order */}
      <View style={styles.PlaceOrderDiv}>
        <TouchableOpacity style={styles.PlaceOrderButton}>
          <Text style={styles.PlaceOrderText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Cart;

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  PlaceOrderDiv: {
    bottom: 30,
    width: Width,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  PlaceOrderButton: {
    backgroundColor: '#23B05B',
    padding: 10,
    paddingVertical: 15,
    width: Width * 0.8,
    borderRadius: 12,
  },
  PlaceOrderText: {
    fontWeight: '600',
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 2,
  },
  orderStatus: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerDiv: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    minHeight: Height,
    backgroundColor: 'white',
    width: Width,
  },
  wishlistItems: {
    marginRight: 10,
  },
  WishlistDiv: {
    bottom: 100,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterItemsDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    left: 10,
    borderLeftWidth: 4,
    marginRight: 160,
    borderColor: '#D9D9D9',
  },
  filterDiv: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filterItemsText: {
    color: '#23B05B',
  },
  filterItems: {
    borderColor: '#23B05B',
    borderRadius: 10,
    borderWidth: 2,
    padding: 15,
    marginLeft: 10,
  },
  filterDivCollectionText: {
    fontSize: 16,
    fontWeight: '600',
  },
  filterDivCollection: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    marginRight: 20,
    left: 20,
  },
  Headerimage1: {
    marginRight: 20,
  },
  HeaderimageDiv: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    width: Width,
  },
  headerdiv1: {
    flexDirection: 'row',
  },
  imageDiv: {
    backgroundColor: '#D9D9D9',
    height: 45,
    width: 45,
    marginRight: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  headertext: {
    color: 'black',
    fontWeight: '600',
    fontSize: 21,
    textAlign: 'center',
  },
});

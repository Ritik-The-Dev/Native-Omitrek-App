import {Text, FlatList, StyleSheet, Image, Dimensions} from 'react-native';
import {View} from 'react-native-animatable';
import {SafeAreaView} from 'react-native-safe-area-context';
import {icons, images} from '../constants';
import Items from '../components/Items';

const Wishlist = () => {
  const wishlistItems = [
    {name: 'Product 1', img: images.product1, mrp: 9999, discountedPrice: 7500},
    {name: 'Product 2', img: images.product1, mrp: 9999, discountedPrice: 7500},
    {name: 'Product 3', img: images.product1, mrp: 9999, discountedPrice: 7500},
    {name: 'Product 4', img: images.product1, mrp: 9999, discountedPrice: 7500},
    {name: 'Product 5', img: images.product1, mrp: 9999, discountedPrice: 7500},
  ];

  const Filter = [
    {name: 'All', link: '/'},
    {name: 'Mobiles', link: '/'},
    {name: 'Grocery', link: '/'},
    {name: 'Backpacks', link: '/'},
    {name: 'Kurta Sets', link: '/'},
  ];

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        ListHeaderComponent={() => (
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
                <View>
                  <Text style={styles.headertext}>Wishlist</Text>
                  <Text>{wishlistItems.length} items</Text>
                </View>
              </View>
              <View style={styles.HeaderimageDiv}>
                <Image
                  resizeMode="contain"
                  style={styles.Headerimage1}
                  source={icons.pencil}
                />
                <Image resizeMode="contain" source={icons.bag} />
              </View>
            </View>

            {/* Filter Div */}
            <View style={styles.filterDiv}>
              <View style={styles.filterDivCollection}>
                <Text style={styles.filterDivCollectionText}>Collections</Text>
              </View>
              <View style={styles.filterItemsDiv}>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={Filter}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => (
                    <View style={styles.filterItems}>
                      <Text style={styles.filterItemsText}>{item.name}</Text>
                    </View>
                  )}
                />
              </View>
            </View>

            {/* Wishlist Items */}
            <View style={styles.WishlistDiv}>
              <FlatList
                data={wishlistItems}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2} // Display two items in a row
                renderItem={({item}) => (
                  <View style={styles.wishlistItems}>
                    <Items
                      name={item.name}
                      mrp={item.mrp}
                      discountedPrice={item.discountedPrice}
                      img={item.img}
                    />
                  </View>
                )}
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Wishlist;

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#F7F7F7',
    height:Height,
    width: Width,
  },
  wishlistItems: {
    marginRight: 10,
  },
  WishlistDiv: {
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    width: Width,
    borderBottomWidth: 2,
    borderBottomColor: '#D9D9D9',
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
  },
});

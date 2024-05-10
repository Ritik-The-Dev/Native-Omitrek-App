import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import {images, icons} from '../constants';
import {SearchInput} from '../components';
import Category from '../components/Category';
import Slides from '../components/Slides';
import Products from '../components/Products';

const Home = () => {
  const category = [
    {name: 'Vegetables & Fruits', img: images.Fruits},
    {name: 'Dairy & Breakfast', img: images.Breakfast},
    {name: 'Cold Drinks & Juices', img: images.Juices},
    {name: 'Instant & Frozen Food', img: images.FrozenFoods},
    {name: 'Mobiles', img: images.Mobiles},
    {name: 'Fashion', img: images.Fashion},
    {name: 'Home', img: images.Home},
    {name: 'Electronics', img: images.Electronics},
  ];

  const BestDeals = [
    {name: 'Product 1', img: images.product1, price: 9999},
    {name: 'Product 2', img: images.product1, price: 9999},
    {name: 'Product 3', img: images.product1, price: 9999},
    {name: 'Product 4', img: images.product1, price: 9999},
    {name: 'Product 5', img: images.product1, price: 9999},
  ];

  const HotDeals = [
    {name: 'Product 1', img: images.product2, price: 199},
    {name: 'Product 2', img: images.product2, price: 199},
    {name: 'Product 3', img: images.product2, price: 199},
    {name: 'Product 4', img: images.product2, price: 199},
    {name: 'Product 5', img: images.product2, price: 199},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <View style={styles.headerContainer}>
            <View style={styles.logoContainer}>
              <Image
                source={images.omitrek}
                style={styles.logo}
                resizeMode="contain"
              />
              <View style={styles.iconContainer}>
                <Image
                  source={icons.gift}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Image
                  source={icons.noti}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Image
                  source={icons.cart}
                  style={styles.icon}
                  resizeMode="contain"
                />
              </View>
            </View>
            <View style={styles.searchContainer}>
              <SearchInput />
              <View style={styles.menuIconContainer}>
                <Image
                  source={icons.linemenu}
                  style={styles.menuIcon}
                  resizeMode="contain"
                />
              </View>
            </View>

            <View style={styles.categoryContainer}>
              <Text style={styles.categoryText}>Shop By Category</Text>
              <Text style={styles.seeAllText}>See All</Text>
            </View>
            <View style={styles.categories}>
              {category.map((item, index) => (
                <View style={styles.categoryItem} key={index}>
                  <Category img={item.img} name={item.name} />
                </View>
              ))}
            </View>

            <Slides />

            <View style={styles.dealsContainer}>
              <Text style={styles.dealsText}>Best Deals</Text>
              <Text style={styles.seeAllText}>See All</Text>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={BestDeals}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.dealItem}>
                  <Products
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                </View>
              )}
            />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={BestDeals}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.dealItem}>
                  <Products
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                </View>
              )}
            />

            <View style={styles.dealsContainer}>
              <Text style={styles.dealsText}>Hot Deals</Text>
            </View>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={HotDeals}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.dealItem}>
                  <Products
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                </View>
              )}
            />
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={HotDeals}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View style={styles.dealItem}>
                  <Products
                    img={item.img}
                    name={item.name}
                    price={item.price}
                  />
                </View>
              )}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  headerContainer: {
    paddingHorizontal: 10,
    marginBottom: 20,
    paddingTop: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 50,
  },
  iconContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  icon: {
    width: 40,
    height: 25,
    marginRight: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginBottom: 20,
  },
  menuIconContainer: {
    backgroundColor: '#23B05B',
    borderRadius: 10,
    marginLeft: 5,
    padding: 5,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  categoryText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
  },
  seeAllText: {
    fontSize: 14,
    color: 'green',
    fontWeight: '600',
    marginBottom: 10,
  },
  categories: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  categoryItem: {
    marginRight: 6,
  },
  dealsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginBottom: 10,
    marginTop: 10,
  },
  dealsText: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    marginBottom: 20,
  },
  dealItem: {
    marginRight: 10,
  },
});

export default Home;

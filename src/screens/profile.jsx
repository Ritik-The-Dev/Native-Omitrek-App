import {SafeAreaView} from 'react-native-safe-area-context';
import {
  View,
  Image,
  FlatList,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {icons, images} from '../constants';

const Profile = () => {
  const data = {
    name: 'Jelly Wilson',
    balance: '3900',
    profilePhoto: images.profile,
  };

  const button = [
    {
      name: 'Wallet',
      icon: icons.wallet,
      link: '/',
    },
    {
      name: 'Support',
      icon: icons.support,
      link: '/',
    },
    {
      name: 'Payment',
      icon: icons.payment,
      link: '/',
    },
  ];

  const Additional = [
    {
      name: 'Your Order',
      icon: icons.order,
      link: '/',
    },
    {
      name: 'Address Book',
      icon: icons.address,
      link: '/',
    },
    {
      name: 'Your Wishlist',
      icon: icons.heart,
      link: '/',
    },
    {
      name: 'Your Coupon',
      icon: icons.gift,
      link: '/',
    },
    {
      name: 'Setting',
      icon: icons.setting,
      link: '/',
    },
    {
      name: 'About us',
      icon: icons.about,
      link: '/',
    },
  ];

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponent={() => (
          <View>
            {/* Header */}
            <View style={styles.header}>
              <View style={styles.imageDiv}>
                <Image
                  resizeMode="contain"
                  style={styles.image}
                  source={icons.leftarrowsmall}
                />
              </View>
              <Text style={styles.headertext}>Edit</Text>
            </View>

            {/* Personal Details */}
            <View style={styles.personalDiv}>
              <View style={styles.balanceDiv}>
                <Image
                  resizeMode="contain"
                  style={styles.coin}
                  source={icons.coin}
                />
                <Text style={styles.balance}>{data.balance}</Text>
              </View>

              <View style={styles.personalDivdetails}>
                <Image
                  resizeMode="contain"
                  style={styles.Profileimage}
                  source={data.profilePhoto}
                />
                <Text style={styles.hello}>Hello,</Text>
                <Text style={styles.name}>{data.name}</Text>
              </View>
            </View>

            {/* Buttons Div */}
            <View style={styles.buttonsDiv}>
              <View style={styles.buttonsInnerDiv}>
                {button.map((e, index) => {
                  return (
                    <View style={styles.buttonMap} key={index}>
                      <Image
                        resizeMode="contain"
                        style={styles.ButtonmapImage}
                        source={e.icon}
                      />
                      <Text style={e.buttonsName}>{e.name}</Text>
                    </View>
                  );
                })}
              </View>
            </View>

            {/* Additional Options */}
            <View style={styles.additionalDiv}>
              {Additional.map((e, index) => {
                return (
                  <View style={styles.additionalOption} key={index}>
                    <View style={styles.ImageNameDiv}>
                      {/*Image Div*/}
                      <View style={styles.additionalImageDiv}>
                        <Image
                          resizeMode="contain"
                          style={styles.additionalImage}
                          source={e.icon}
                        />
                      </View>
                      <Text style={styles.AdditionalbuttonsName}>{e.name}</Text>
                    </View>
                    <Image resizeMode="contain" source={icons.rightArrow} />
                  </View>
                );
              })}
            </View>

            {/* Logout Button */}
            <TouchableOpacity
              style={styles.logoutdiv}
              onPress={() => {
                /* Handle logout */
              }}>
              <Text style={styles.logoutbutton}>Logout</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;

const Width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  logoutdiv: {
    alignItems: 'flex-start',
    padding: 15,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#D9D9D9',
    width: Width * 0.4,
    borderRadius: 20,
    alignItems: 'center',
  },
  logoutbutton: {
    color: 'black',
    fontSize: 18,
    fontWeight: '600',
  },
  AdditionalbuttonsName: {
    color: 'black',
    fontFamily: 'poppins',
    fontSize: 20,
    fontWeight: '400',
  },
  additionalImageDiv: {
    backgroundColor: '#D9D9D9',
    padding: 5,
    borderRadius: 50,
    marginRight: 20,
  },
  additionalImage: {
    height: 10,
    width: 11,
  },
  additionalDiv: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  ImageNameDiv: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  additionalOption: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ButtonmapImage: {
    marginBottom: 5,
  },
  buttonsName: {
    color: 'black',
    fontWeight: '500',
  },
  buttonsDiv: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  buttonsInnerDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#D9D9D9',
    padding: 20,
    paddingHorizontal: 10,
    width: Width * 0.9,
    borderRadius: 20,
  },
  buttonMap: {
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
  imageDiv: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 50,
  },
  headertext: {
    color: '#23B05B',
  },
  personalDiv: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
    padding: 2,
  },
  balanceDiv: {
    marginTop: 100,
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  coin: {
    marginRight: 10,
  },
  balance: {
    color: 'black',
    fontWeight: '600',
  },
  personalDivdetails: {
    marginTop: 20,
    color: 'black',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  Profileimage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginBottom: 10,
  },
  hello: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 21,
    color: 'black',
  },
  name: {
    fontSize: 20,
    color: 'black',
    lineHeight: 30,
    fontWeight: '600',
  },
});

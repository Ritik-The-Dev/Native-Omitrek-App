import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  Dimensions,
} from 'react-native';
import {icons} from '../constants';
const screenWidth = Dimensions.get('window').width;

const SearchInput = ({initialQuery}) => {
  const [query, setQuery] = useState(initialQuery || '');

  return (
    <View style={styles.inputContainer}>
      <Image source={icons.search} style={styles.image} resizeMode="contain" />

      <TextInput
        style={styles.textInput}
        value={query}
        placeholder="Search for Products"
        placeholderTextColor="white"
        onChangeText={text => setQuery(text)}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === '') {
            Alert.alert(
              'Missing Query',
              'Please input something to search results across database',
            );
          } else {
            // Handle search action
          }
        }}>
        {/* You can add an icon or text for the search button */}
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    marginLeft: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#000',
    width: screenWidth * 0.8,
  },
  image: {
    marginLeft:5,
    padding:2,
    width: 20,
    height: 20,
  },
});

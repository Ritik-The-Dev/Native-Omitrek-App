import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchInput } from "../components";

const Search = () => {
  // const { query } = useLocalSearchParams();
  const query = "query"; // Assuming query value is provided

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts} // Assuming posts is defined elsewhere
        keyExtractor={(item) => item.$id} // Assuming $id is a unique identifier
        ListHeaderComponent={() => (
          <>
            <View style={styles.header}>
              <Text style={styles.headerText}>
                Search Results
              </Text>
              <Text style={styles.queryText}>
                {query}
              </Text>

              <View style={styles.searchInputContainer}>
                <SearchInput initialQuery={query} refetch={refetch} />
              </View>
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'primary',
    flex: 1,
  },
  header: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontFamily: 'pmedium',
    color: 'gray-100',
    fontSize: 14,
  },
  queryText: {
    fontFamily: 'psemibold',
    color: 'white',
    fontSize: 20,
    marginTop: 5,
  },
  searchInputContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
});

export default Search;

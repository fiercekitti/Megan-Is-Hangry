import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/resultsList';

const SearchScreen = () => {
  //call to Yelp API
  const [term, setTerm] = useState('');
  //Hooks for business search
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(results => {
        return results.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} header="Cheap Cheap" />
      <ResultsList results={filterResultsByPrice('$$')} header="Average"/>
      <ResultsList results={filterResultsByPrice('$$$')} header="Expensive"/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
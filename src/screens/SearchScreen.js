import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      <ResultsList 
        results={filterResultsByPrice('$')} 
        header="Cheap Cheap" 
      />
      <ResultsList 
        results={filterResultsByPrice('$$')} 
        header="Average"
      />
      <ResultsList 
        results={filterResultsByPrice('$$$')} 
        header="Expensive"
      />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
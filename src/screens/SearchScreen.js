import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    //search term 
    const [term, setTerm] = useState('');
    //yelp api call results
    const [results, setResults] = useState([]);
    //error message for user
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchAPI = async (searchTerm) => {
        console.log('Hi there!')
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'lenexa'
            }
        });
        setResults(response.data.businesses);
    } catch (err) {
        setErrorMessage('Something went wrong. Please try again.')
    }

    };
   
    //Call searchAPI when compenent is first rendered
    //searchAPI('pasta')

    return (
    <View>
        <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchAPI(term)} 
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text>We have found {results.length} results </Text>
    </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;
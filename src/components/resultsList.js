import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ( { header, results } ) => {
    return (
    <View style={styles.container}>
        <Text style={styles.headerStyle}>{header}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={( result ) => result.id }
            renderItem={( { item } ) => {
                return <ResultsDetail result={item} />;
            }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        fontSize: 18,
        fontWeight:'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;
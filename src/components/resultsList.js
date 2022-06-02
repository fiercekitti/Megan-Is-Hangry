import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ( { header, results, navigation } ) => {
    //hide headers on initial load
    if (!results.length) {
        return null;
    }

    return (
    <View style={styles.container}>
        <Text style={styles.headerStyle}>{header}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={( result ) => result.id }
            renderItem={({ item }) => {
                return (
                <TouchableOpacity 
                onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
                >
                    <ResultsDetail result={item} />
                </TouchableOpacity>
                )
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

export default withNavigation(ResultsList);
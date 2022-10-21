import {
  View, Text, StyleSheet, FlatList, TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import { NavigationContext } from '@react-navigation/native';
import ResultsDetail from './ResultsDetail';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default function ResultsList({ title, results }) {
  const navigation = useContext(NavigationContext);
  if (!results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
            <ResultsDetail result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

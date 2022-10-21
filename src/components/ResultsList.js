import {
  View, Text, StyleSheet, FlatList,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default function ResultsList({ title, results }) {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text>
        Results:
        {' '}
        {results.length}
      </Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

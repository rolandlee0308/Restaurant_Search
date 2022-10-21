import {
  View, Text, StyleSheet, FlatList, Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default function ResultsShow({ route }) {
  const [result, setResult] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    const getResult = async () => {
      const res = await yelp.get(`/${id}`);
      setResult(res.data);
    };
    getResult();
  }, [id]);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => <Image style={styles.image} source={{ uri: item }} />}
      />
    </View>
  );
}

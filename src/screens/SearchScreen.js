import React, { useState } from 'react';
import { View, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const res = await yelp.get('/search', { params: { limit: 50, term, location: 'san jose' } });
    setResults(res.data.businesses);
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      <Text>SearchScreen</Text>
      <Text>{results.length}</Text>
    </View>
  );
}

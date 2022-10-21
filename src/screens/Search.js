import React, { useState } from 'react';
import { Text, ScrollView } from 'react-native';
import ResultsList from '../components/ResultsList';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';

export default function SearchScreen() {
  const [term, setTerm] = useState('');
  const [searchApi, results, errMessage] = useBusinesses();

  const filterResultsByPrice = (price) => results.filter((result) => result.price === price);

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errMessage && <Text>{errMessage}</Text>}
      <ScrollView>
        <ResultsList title="Cost Effective" results={filterResultsByPrice('$')} />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice('$$')} />
        <ResultsList title="Big Spender" results={filterResultsByPrice('$$$')} />
      </ScrollView>
    </>
  );
}

/*
Resolve oversize content:
1. use empty tags
2. use flex 1 property on View
*/

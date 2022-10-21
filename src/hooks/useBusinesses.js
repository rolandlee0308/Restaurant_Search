import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default function useBusinesses() {
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const res = await yelp.get('/search', {
        params: { limit: 50, term: searchTerm, location: 'san jose' },
      });
      setResults(res.data.businesses);
    } catch (error) {
      setErrMessage('something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errMessage];
}

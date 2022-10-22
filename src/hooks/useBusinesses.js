import { useEffect, useState, useContext } from 'react';
import yelp from '../api/yelp';
import { AppContext } from '../../AppContext';

export default function useBusinesses() {
  const [results, setResults] = useState([]);
  const { location, setErrorMsg, errorMsg } = useContext(AppContext);

  const searchApi = async (searchTerm) => {
    try {
      if (location.lat && location.long) {
        const res = await yelp.get('/search', {
          params: {
            limit: 50, term: searchTerm, latitude: location.lat, longitude: location.long,
          },
        });
        setResults(res.data.businesses);
        setErrorMsg(null);
      }
    } catch (error) {
      if (!errorMsg) {
        setErrorMsg('something went wrong');
      }
    }
  };

  useEffect(() => {
    searchApi();
  }, [location]);

  return [searchApi, results, errorMsg];
}

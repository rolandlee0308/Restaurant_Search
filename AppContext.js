import {
  createContext, useState, useEffect,
} from 'react';
import * as Location from 'expo-location';

export const AppContext = createContext(null);

export default function AppContextProvider({ children }) {
  const [location, setLocation] = useState({ long: null, lat: null });
  const [errorMsg, setErrorMsg] = useState('Loading . . .');

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const pos = await Location.getCurrentPositionAsync({});
      const { longitude, latitude } = pos.coords;
      setLocation({ long: longitude, lat: latitude });
    })();
  }, []);

  return (
    <AppContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        location,
        errorMsg,
        setErrorMsg
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

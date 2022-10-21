import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResultsShowScreen from './src/screens/ResultsShow';
import SearchScreen from './src/screens/Search';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: 'Business Search' }}
        />
        <Stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen}
          options={{ title: 'Business Search' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

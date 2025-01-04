import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';

export default function App() {
  return (
    <SafeAreaProvider>
     <NavigationContainer>
    </NavigationContainer> 
    </SafeAreaProvider>
  );
}



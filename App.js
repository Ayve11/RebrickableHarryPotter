import { StatusBar } from 'react-native';
import BasketProvider from './contexts/BasketContext';
import WebviewProvider from './contexts/WebviewContext';
import ChooserPage from './pages/ChooserPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormPage from './pages/FormPage';

export default function App() {
  const RootStack = createStackNavigator();
  
  return (
    <WebviewProvider>
      <BasketProvider>
        <StatusBar hidden/>
        <NavigationContainer>
          <RootStack.Navigator screenOptions={{headerShown: false}}>
            <RootStack.Screen name="Chooser" component={ChooserPage} />
            <RootStack.Screen name="Form" component={FormPage} />
            <RootStack.Screen name="Summary" component={ChooserPage} />
          </RootStack.Navigator>
        </NavigationContainer>
      </BasketProvider>
    </WebviewProvider>
  );
}
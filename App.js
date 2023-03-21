import { StatusBar } from 'react-native';
import BasketProvider from './contexts/BasketContext';
import WebviewProvider from './contexts/WebviewContext';
import ChooserPage from './pages/ChooserPage';

export default function App() {
  return (
    <WebviewProvider>
      <BasketProvider>
        <StatusBar hidden/>
        <ChooserPage/>
      </BasketProvider>
    </WebviewProvider>
  );
}
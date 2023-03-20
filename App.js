import WebviewProvider from './contexts/WebviewContext';
import ChooserPage from './pages/ChooserPage';

export default function App() {
  return (
    <WebviewProvider>
      <ChooserPage/>
    </WebviewProvider>
  );
}
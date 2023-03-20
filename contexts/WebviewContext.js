import * as React from 'react';
import { Button, View } from 'react-native';
import WebView from 'react-native-webview';

const WebviewContext = React.createContext({
  setUrl: () => {}
});

const WebviewProvider = ({ children }) => {
  const [url, setUrl] = React.useState(null);
  return (
    <WebviewContext.Provider value={{ setUrl }}>
      {url && <View style={{ position: 'absolute', height: '100%', width: '100%', zIndex: 100 }}>
        <WebView source={{ uri: url }} />
        <Button onPress={() => setUrl(null)} title="Back"/>
      </View>}
      {children}
    </WebviewContext.Provider>
  )
}

export {WebviewContext};

export default WebviewProvider;
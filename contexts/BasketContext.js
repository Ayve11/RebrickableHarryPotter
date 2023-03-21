import * as React from 'react';

const BasketContext = React.createContext({
  minifig: null,
  setMinifig: () => {}
});

const BasketProvider = ({ children }) => {
  const [minifig, setMinifig] = React.useState(null);
  return (
    <BasketContext.Provider value={{ minifig, setMinifig }}>
      {children}
    </BasketContext.Provider>
  )
}

export {BasketContext};

export default BasketProvider;
import * as React from 'react';

const BasketContext = React.createContext({
  minifig: null,
  setMinifig: () => {},
  personalData: null,
  setPersonalData: () => {},
});

const BasketProvider = ({ children }) => {
  const [minifig, setMinifig] = React.useState(null);
  const [personalData, setPersonalData] = React.useState(null);
  return (
    <BasketContext.Provider value={{ minifig, setMinifig, personalData, setPersonalData}}>
      {children}
    </BasketContext.Provider>
  )
}

export {BasketContext};

export default BasketProvider;
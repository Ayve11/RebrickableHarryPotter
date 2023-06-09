import * as React from 'react';

const BasketContext = React.createContext({
  minifig: null,
  setMinifig: () => {},
  personalData: null,
  setPersonalData: () => {},
  clear: () => {},
});

const BasketProvider = ({ children }) => {
  const [minifig, setMinifig] = React.useState(null);
  const [personalData, setPersonalData] = React.useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const clear = () => {
    setMinifig(null);
    setPersonalData({
      fullName: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
    });
  }
  return (
    <BasketContext.Provider value={{ minifig, setMinifig, personalData, setPersonalData, clear}}>
      {children}
    </BasketContext.Provider>
  )
}

export {BasketContext};

export default BasketProvider;
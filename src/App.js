import { useState } from 'react';
import './App.css'
import { UserContext } from "./components/Context/UserContext"
import RouterApp from './router/RouterApp';

function App() {
  // navbar-aside
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Cart
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };

  return (
    <UserContext.Provider value={{ isOpen, setIsOpen, toggle, cartIsOpen, setCartIsOpen, toggleCart }}>
      <RouterApp />
    </UserContext.Provider>
  );
}

export default App;

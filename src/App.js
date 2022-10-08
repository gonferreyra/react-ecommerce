import { useState } from 'react';
import './App.css'
import { UserContext } from "./components/Context/UserContext"
import RouterApp from './components/router/RouterApp';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <UserContext.Provider value={{ isOpen, setIsOpen, toggle }}>
      <RouterApp />
    </UserContext.Provider>
  );
}

export default App;

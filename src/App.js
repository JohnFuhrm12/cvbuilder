import { useState } from 'react';
import './App.css';
import Info from './components/Info.js';
import Template from './components/Template.js';

function App() {
  const [name, setName] = useState('John Fuhrmeister');
  const [email, setEmail] = useState('JFDeveloper@gmail.com');
  const [phone, setPhone] = useState('+1 (767)-342-3424');
  const [address, setAddress] = useState('New Jersey, USA');

  const [educationItems, setEducationItems] = useState([]);

  const props = {
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    address,
    setAddress,
    educationItems,
    setEducationItems
  };

  return (
    <>
      <div id='content'>
        <Info {...props}/>
        <Template {...props}/>
      </div>
    </>
  );
};

export default App;



import { useState } from 'react';
import Home from './Home';
import './App.css';
import Signup from './Signup';


function App() {
  const [user, setUser] = useState(null)
  return (
     <div className="App">
       
      { user ? <Home /> : <Signup />}
      
       </div>
       
       );
  }
export default App;
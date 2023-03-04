import React from 'react';
import './App.css';
import { Person, enumCountry } from './Person';

function App() {
  return (
    <div className="App">
       <Person 
          name="abdelkarim"
          email="abdelkarim@gmail.com"
          age={28}
          isMarried={false}
          friends={["mohamed", "billel"]}
          country= {enumCountry.alg}
       />
    </div>
  );
}

export default App;

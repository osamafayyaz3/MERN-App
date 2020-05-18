import React from 'react';
import axios from 'axios';

function App() {
   
  axios.get('http://localhost:3001/').then(response => {
    const notes = response.data
    console.log(notes)
  })

  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}

export default App;

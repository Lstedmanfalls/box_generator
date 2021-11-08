import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import Box from './components/Box';

function App() {
  const [colorList, setColorList] = useState([]);

  return (
    <div className="App">
      <Form colorList={colorList} setColorList={setColorList}/>
      <Box colorList={colorList}/>
    </div>
  );
}

export default App;
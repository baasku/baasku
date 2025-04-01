import { useState } from 'react';
import './App.css';
import Box from "./component/Box";
import Stateexample from './component/Stateexample';
import Inputexample from './css/inputexample';
import Changebutton from './css/Changebutton.jsx';
import Todo from './css/Todo';
import Shalgalt from './css/Shalgalt.jsx';

// Зөвхөн нэг удаа dataBox-ийг импортлох
import { dataBox } from './data/dataBox.jsx';

function App() {
  return (
    <div>
      {/* Uncomment and use the components as needed */}
      {/* {dataBox.map((data) => (
        <Box 
          key={data.id}
          text={data.text}
          channel={data.channel}
          desc={data.desc}
          img={data.img}
        />
      ))} */}
      {/* <Inputexample /> */}
      {/* <Changebutton /> */}
      {/* <Todo /> */}
      {/* dataBox-ийг Shalgalt руу дамжуулах */}
      <Shalgalt dataBox={dataBox} />
    </div>
  );
}

export default App;

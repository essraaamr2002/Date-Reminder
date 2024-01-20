// import Nav from './component/Nav';
// import './App.css';
// import Esraa from'./component/imags/Esraa.jpg'
// import NotFound from './component/NotFound';
// import {Route,BrowserRouter, Routes} from 'react-router-dom';
// import Content from './component/Content';
// import About from './component/About';
// import Count from './component/Count';

// function App() {

//   //   const data= [
//   //     {title:'t1',description:'hi esraa good jop for now alhamdollah',img:Esraa},
//   //     {title:'t2',description:'hi esraa good jop for now alhamdollah',img:Esraa},
//   //     {title:'t3',description:'hi esraa good jop for now alhamdollah',img:Esraa},
//   //     {title:'t4',description:'hi esraa good jop for now alhamdollah',img:Esraa}

//   // ]

//     return (
//     <div>

//     <BrowserRouter>
//       <Routes>
//         <Route path='/about' element={<About/>}/>
//         <Route path='/content' element={<Content/>}/>
//         <Route path='/nf' element={<NotFound/>}/>
//         <Route path='/Nav' element={<Count/>}/>
//         <Route path='/count' element={<Count/>}/>

//       </Routes>

//     </BrowserRouter>

//     </div>
//   );
// }

// export default App;

import { person } from "./Dat";
import Headedata from "./component/Headedata";
import Actiondata from "./component/Actiondata";
import Buttons from "./component/Buttons.js";
import { Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";

function App() {
  const [personData, setPersonData] = useState(person);
  const deletData = () => {
    setPersonData([]);
  };
  const onViewData = () => {
    setPersonData(person);
  };
  useEffect(() => {
    setPersonData([]);
  }, []);

  return (
    <div className="font color-body">
      <Container className="py-5">
        <Headedata person={personData} />
        <Actiondata person={personData} />
        <Buttons deletData={deletData} onViewData={onViewData} />
      </Container>
    </div>
  );
}

export default App;

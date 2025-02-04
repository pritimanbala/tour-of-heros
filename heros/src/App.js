import Detail from './elements/detail';
import Disp from './elements/display';
import List from './elements/list';
import Msg from './elements/message';
import Navb from './elements/navbar';

import {BrowserRouter, Route, Routes} from "react-router-dom"
 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navb />
        <Routes>
        <Route path='/' element={<Disp/>} />
        <Route path='/detail/:name' element={<Detail/> }/>
        <Route path='/heros' element={<List/>}/>
        </Routes>
        <Msg />
      </BrowserRouter>
    </div>
  );
}

export default App;
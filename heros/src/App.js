import Detail from './detail';
import Disp from './elements/display';
import Msg from './elements/message';
import Navb from './elements/navbar';
import ReactDOM from "react-dom/client";
import {Router, Route, Routes} from "react-router-dom"
 
function App() {
  return (
    <div className="App">
      <Router>
        <Navb />
        <Routes>
        {/* <Disp /> */}
        <Detail/>
        </Routes>
        <Msg />
      </Router>
    </div>
  );
}

export default App;
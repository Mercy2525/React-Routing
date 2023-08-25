import './App.css';
import Home from "./Home"
import About from './About';
import Contacts from './Contacts';
import NotFound from './NotFound';
import Landing from './Landing';
import Details from './Details';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Landing/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/quotes' element={<Home/>}/>
          <Route path='quotes/:id' element={<Details/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Route>
          <Route path='*' element={<NotFound/>}/>
      </Routes> 
    </div>
  );
}

export default App;

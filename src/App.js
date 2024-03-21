import { Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About/About';
import AboutProject from './components/About/AboutProject/AboutProject';
import Galery from './components/Galery/Galery';

function App() {
  return (
    <Routes>
      <Route index element={<Main/>} />
      <Route path='/about' element={<About/>}/>
      <Route  path='/about/project' element={<AboutProject/>}/>
      <Route path='/galery' element={<Galery/>}/>
    </Routes> 
  );
}

export default App;

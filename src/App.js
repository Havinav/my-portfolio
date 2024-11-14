import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import MySelf from './components/MySelf'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path='/about' element={<About/>}/>
         <Route path='/projects' element={<Projects/>}/>
         <Route path='/education' element={<Education/>}/>
         <Route path='/' element={<MySelf/>}/>
      </Routes>
    </div>
  );
}

export default App;

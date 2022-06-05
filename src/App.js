import {Routes, Link, Route} from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Notfound from './pages/Notfound';

function App() {

  return (
    <div className='container'>
    <header>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
    </header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
 }
export default App;

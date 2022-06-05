import {Routes, Link, Route} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Notfound from './pages/Notfound';

function App() {

  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='*' element={<Notfound/>}/>
        </Route>
        
      </Routes>
    </div>
  )
 }
export default App;

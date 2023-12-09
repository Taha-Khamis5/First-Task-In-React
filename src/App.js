import React from 'react'
import { BrowserRouter , Routes , Route , Link , NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Aside from './Aside'

import 'bootstrap/dist/css/bootstrap.min.css';
import Butt from './Butt'

function App() {
  return (
    <BrowserRouter>
    <Butt />
      <NavLink>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Aside'>Aside</Link>
      </NavLink>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Aside' element={<Aside />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
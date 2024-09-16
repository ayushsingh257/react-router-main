import { useState } from 'react'
import './App.css'
import { Nav as Navbar } from './components/NavBar';
import AllRoutes from './components/Allroutes';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='container'>
      <Navbar/>
      <AllRoutes/>
    </div>
  )
}

export default App
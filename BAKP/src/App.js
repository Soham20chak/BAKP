import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import Login from './components/Login'



import './App.css'

function App() {
  return (
    <>
      
        
      <Routes>
      <Route index element={<Homepage />} />
          <Route path="login" element={<Login />}/>
        

        
          

</Routes>

        
          
        
      
    </>
  )
}

export default App
import { useState } from 'react'
import FeedbackLayout from './FeedbackForm/FeedbackLayout'
import { Route, Routes } from 'react-router-dom'
import Onsuccess from './Onsuccess'
import FeedbackForm from './FeedbackForm/FeedbackForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gradient-custom w-screen h-screen'>
      <Routes>
          <Route path='/' element={<FeedbackLayout/>}>
              <Route path='/success' element={<Onsuccess/>}/>
              <Route path='/' element={<FeedbackForm/>}/>
          </Route>
          <Route path='/success' element={<Onsuccess/>}/>
      </Routes>
    </div>
   )
}

export default App

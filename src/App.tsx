import { useState, useEffect } from 'react'
import './App.css'
import { MainDashboard,  } from './components/export'
import { callAllData } from './services/allData'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    callAllData(setLoading)
      .then((res) => {
        setData(res)
      })
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={loading ?
          <p>Loading</p>
          :
          <MainDashboard data={data} />} />
{//      <Route path="/more/id:" element={<InfoPage/>}/>
}
      </Routes>
    </Router>
  )
}

export default App

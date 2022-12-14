import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import App from './App'
import R1401 from './components/pages/R1401'
import D90 from './components/pages/D90'
import D80 from './components/pages/D80'
import D70 from './components/pages/D70'
import D60 from './components/pages/D60'
import R57 from './components/pages/R57'
import NotFound from './components/pages/NotFound'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={ <App /> } />
    <Route path='1401' element={ <R1401 /> } />
    <Route path='90' element={ <D90 /> } />
    <Route path='80' element={ <D80 /> } />
    <Route path='70' element={ <D70 /> } />
    <Route path='60' element={ <D60 /> } />
    <Route path='57' element={ <R57 /> } />
    <Route path='*' element={ <NotFound /> } />
  </Routes>
  </BrowserRouter>
)
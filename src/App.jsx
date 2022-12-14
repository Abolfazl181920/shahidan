import YearsDev from './components/years/Years'
import HomeNoti from './components/notices/HomeNoti'

import MartyrsCount from './components/notices/MartyrsCount'

import IranFlag from './assets/iran.jpeg'
import './App.css'

const App = () => {
  return (
    <>
      <div className='App'>
        <img src={IranFlag} className='IranFlagStyle' />
      </div>
      <HomeNoti />
      <MartyrsCount />
      <YearsDev />
    </>
  )
}

export default App
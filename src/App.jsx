

import Banner from './Banner'
import Care from './Care'
import Health from './Health'
import Mission from './Mission'
import NavBar from './NavBar'

function App() {
  

  return (
    <>
      
      <div className='max-w-7xl mx-auto'>
        <NavBar></NavBar>
      </div>

      <div className='max-w-7xl mx-auto'>
        <Banner></Banner>
      </div>

      <div className='max-w-7xl mx-auto'>
        <Care></Care>
      </div>

      <div className='max-w-7xl mx-auto'>
        <Mission></Mission>
      </div>

      <div className='max-w-7xl mx-auto'>
        <Health></Health>
      </div>

     
    </>
  )
}

export default App

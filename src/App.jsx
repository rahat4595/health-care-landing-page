

import Banner from './Banner'
import Care from './Care'
import Faq from './Faq'
import Health from './Health'
import Mission from './Mission'
import NavBar from './NavBar'
import Reviews from './Reviews'

function App() {
  

  return (
    <>
      
      <div className='max-w-6xl mx-auto'>
        <NavBar></NavBar>
      </div>

      <div className='max-w-6xl mx-auto'>
        <Banner></Banner>
      </div>

      <div className='max-w-6xl mx-auto'>
        <Care></Care>
      </div>

      <div className='max-w-6xl mx-auto'>
        <Mission></Mission>
      </div>

      <div className='max-w-6xl mx-auto'>
        <Health></Health>
      </div>

      <div className='max-w-6xl mx-auto'>
        <Reviews></Reviews>
      </div>

      <div className='max-w-6xl mx-auto'>
        <Faq></Faq>
      </div>

     
    </>
  )
}

export default App

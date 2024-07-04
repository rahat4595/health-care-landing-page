

import Appointment from './Appointment'
import Banner from './Banner'
import Care from './Care'
import Faq from './Faq'
import Footer from './Footer'
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

      <div className='max-w-6xl mx-auto p-5'>
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

      <div className='max-w-6xl mx-auto p-5'>
        <Reviews></Reviews>
      </div>

      <div className='max-w-6xl mx-auto p-5'>
        <Faq></Faq>
      </div>

      <div className='max-w-6xl mx-auto'>
        <Appointment></Appointment>
      </div>

    <div>
      <Footer></Footer>
    </div>
     
    </>
  )
}

export default App

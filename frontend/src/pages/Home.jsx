import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner';
import ItemsDisplay from '../components/Itemsdisplay';
import Chains from '../components/Chains';
import Firms from '../components/Firms';
import FirmCollections from '../components/FirmCollections';
import Textslider from '../components/Textslider';
import Footer from '../components/Footer';
const Home = () => {
  return (
    < >
       <div className='container'>
       <Navbar />
       <Banner />
       <ItemsDisplay />
       <Textslider/>
       {/* <Chains/> */}
       <Firms/>
       <FirmCollections/>
       <Footer/>
       </div>
    </>
  )
}

export default Home

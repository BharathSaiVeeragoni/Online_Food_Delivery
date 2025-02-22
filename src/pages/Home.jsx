import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner';
import ItemsDisplay from '../components/Itemsdisplay';
import Chains from '../components/Chains';
import Firms from '../components/Firms';
import FirmCollections from '../components/FirmCollections';
import Textslider from '../components/Textslider';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Admindisplay from '../components/Admindisplay';
const Home = () => {
  return (
    <div>
       <Navbar />
       <Sidebar />
       <Admindisplay/>
       <Footer/>
    </div>
  )
}

export default Home

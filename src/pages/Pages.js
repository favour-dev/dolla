import React, {useState} from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar'
import HeroSection from '../Components/HeroSection/HeroSection';
import InfoSection from '../Components/InfoSection/InfoSection';
import Services from '../Components/Services/Services';
import Footer from '../Components/Footer/Footer';
import {homeObjOne, homeObjTwo, homeObjThree} from '../Components/InfoSection/Data'
const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </div>
    )
}

export default Home

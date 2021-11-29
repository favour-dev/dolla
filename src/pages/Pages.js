import React, {useState} from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar'
import HeroSection from '../Components/HeroSection/HeroSection';
import InfoSection from '../Components/InfoSection/InfoSection';
const Home = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection/>
        </div>
    )
}

export default Home

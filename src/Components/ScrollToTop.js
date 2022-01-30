import {UseEffect} from 'react'
import {useLocation} from 'react-router-dom'

export default function ScrollToTop(){
    const {pathname} = useLocation()

    UseEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])

    return null;
}

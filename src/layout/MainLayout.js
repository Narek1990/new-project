import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Footer } from '../Components/footer/Footer'
import { Header } from '../Components/Header/Header'
import Routes from '../Routes'

export default function MainLayout() {
    const history = useHistory()

    useEffect(() => {
        history.push('/')
    },)


    return (
        <>
            <Header />
            <Routes />
            <Footer />
        </>
    )
}

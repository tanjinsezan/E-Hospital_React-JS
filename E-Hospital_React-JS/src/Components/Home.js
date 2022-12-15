import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
    return(
       
        <>
        <Header/>
        <div className="home-page">
            <div className="home-div">
                <p className="pt-5">Welcome</p>
                <h1>E-Hospital is ready to serve YOU</h1>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Home;
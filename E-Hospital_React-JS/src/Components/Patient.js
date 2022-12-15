import React from 'react'
import PHeader from './PHeader'
import Footer from './Footer'
function Patient(){
    return(
        <div>
            <PHeader/>
            <h1>Welcome to E-Hospital</h1>
            <br> </br>
            <h3>Browse for your health issues here!</h3>
            <Footer/>
        </div>
    )
}
export default Patient;
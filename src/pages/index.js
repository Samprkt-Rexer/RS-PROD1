import React from 'react'
import Navbar from '../component/navbar'
import Card from '../component/card'
import './index.css'

const index = () => {
    return (
        <>
           <Navbar/>
           <div className = 'cards'>
           <Card/> 
           <Card/> 
           <Card/> 
           <Card/>
           <Card/> 
           <Card/>
           <Card/>
           <Card/>
           <Card/><Card/><Card/><Card/><Card/><Card/><Card/>
           </div>
        </>
    )
}

export default index

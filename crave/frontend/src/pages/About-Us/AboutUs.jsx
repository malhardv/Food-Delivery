import React from 'react'
import './About.css'
import { about_info } from '../../assets/aboutInfo'

const AboutUs = () => {
    return (
        <div className='about-us'>
            <h1>ABOUT US</h1>
            {about_info.map((item, index) => {
                return (
                    <div className="about-info" key={index}>
                        <h2>{item.title}</h2>
                        <hr />
                        <p>{item.info}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default AboutUs
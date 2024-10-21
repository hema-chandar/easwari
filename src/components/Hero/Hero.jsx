import React from 'react'
import './Hero.css'
import white_arrow from '../../assets/white-arrow.png'
const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>5th INTERNATIONAL CONFERENCE</h1>
                <h2>ON ADVANCES IN MECHANICAL ENGINEERING</h2>
                    <button className='btn'>Explore more <img src={white_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero
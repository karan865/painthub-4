import React from 'react'
import './Cards.css'

const CardOne = (props) => {
    return (
        <>
        {props.details.map( (value,index) => (
            <div className="services-offer-card" key={index}>
                <div className="upper">
                    <img src={value.img} alt="img" />
                    <h2>{value.title}</h2>
                </div>
                <div className="lower">
                    <p>{value.description}</p>
                    <button className='white-btn'>KNOW MORE</button>
                </div>
            </div>
        ) )}
        </>
    )
}

export default CardOne
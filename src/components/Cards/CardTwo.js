import React from 'react'
import './Cards.css'

const CardTwo = (props) => {
    return (
        <>
        {props.detailsTwo.map( (value,index) => (
            <div className="why-choose-services-card">
                <img src={value.img} alt="img" />
                <h4>{value.title}</h4>
                <p>{value.description}</p>
            </div>
        ) )}
        </>
    )
}

export default CardTwo
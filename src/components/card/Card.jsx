import React from 'react';
import './Card.css'

function Card({student}) {
    return (
        <div>
             <div className="card-container">
                <img  alt="student" src={`https://robohash.org/${student.id}?set=set2&size=180x180`}/> 
                <h1> {student.name} </h1>
                <h2> {student.FamilyName} </h2>
            
            </div>

        </div>
    )
}

export default Card

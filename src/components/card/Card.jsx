import React from 'react';
import './Card.css'

function Card({student, onCLickDeleteStudent}) {
    return (
        <div>
             <div className="card-container">
                <img  alt="student" src={`https://robohash.org/${student.id}?set=set2&size=180x180`}/> 
                <h1> {student.name} </h1>
                <h2> {student.FamilyName} </h2>
                <h2> {student.age} </h2>
                <button onClick={onCLickDeleteStudent(student)} >delete student </button>
            
            </div>

        </div>
    )
}

export default Card

import React from 'react'
import './Card-list.css'
import Card from '../card/Card'


function CardList(props) {
    return (
        <div className="card-list">

            {props.students.map(student => (
                <Card key={student.id} student={student}  onCLickDeleteStudent={props.onCLickDeleteStudent}  />
            ))}

        
        </div>

    )
}
  



export default CardList

import React, { useState } from 'react';
import CardList from './components/card-list/Card-list'
import './App.css'



function Function() {
    const [students, setStudents] = useState([
        { name: "mohammad", FamilyName: "jalaly", age: "20", id: 123456789 },
        { name: "mehrshad", FamilyName: "bagherzade", age: "19", id: 987654321 },
      ])

      const [search, setSearch] = useState("")


     


      const AddPetForm = (props) => {
        const [name, setName] = useState()
        const [FamilyName, setFamilyName] = useState()
        const [age, setAge] = useState()
        
        function handleSubmit(e) {
          e.preventDefault()
          setStudents(prev => prev.concat({name, FamilyName, age, id: Date.now()}))
          setName("")
          setFamilyName("")
          setAge("")
        }
        
        return (
          <form  onSubmit={handleSubmit}>
            <fieldset>
              <legend>Add New Student</legend>
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
              <input value={FamilyName} onChange={e => setFamilyName(e.target.value)} placeholder="FamilyName" />
              <input value={age} onChange={e => setAge(e.target.value)} placeholder="age in years" />
              <button>Add Student</button>
            </fieldset>
          </form>
        )
      }
      
     
     

      const onClickAddNewStudent = () => {
        const hidden = document.querySelector('.hid')

        hidden.classList.toggle("show-sidebar");

      }
     


      const onChangeEvent = (e) =>{
        setSearch(e.target.value)
      }

     const onCLickDeleteStudent = (std) =>{

      return students.filter(student=> student.id !== std.id)


       

            // const index = students.findIndex((student) => student.id === contactId);

            // students.splice(index, 1);

            // const j = items[name].findIndex(item => item.FamilyName === sid);


            // setStudents({
            //   myrecords: items
            // });
     }
      
         const filteredMonster = students.filter(student => student.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>

            <input type='search' placeholder="search students" onChange={onChangeEvent}/>

            <button onClick={onClickAddNewStudent}>add new student</button>


            <div className="hid sidebar-toggle">
              <AddPetForm setPets={setStudents}  />
            </div>
            <CardList students={filteredMonster} onCLickDeleteStudent={onCLickDeleteStudent} />
        </div>
    )
}

export default Function










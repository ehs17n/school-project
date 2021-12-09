import React, { useState } from 'react';
import CardList from './components/card-list/Card-list'
import './App.css'



function Function() {
    const [students, setStudents] = useState([
        { name: "Meowsalot", FamilyName: "cat", age: "5", id: 123456789 },
        { name: "Barksalot", FamilyName: "dog", age: "3", id: 987654321 },
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
      
     
      const hidden = document.querySelector('.hid')

      const onClickAddNewStudent = () => {

        hidden.classList.toggle("show-sidebar");

      }
     


      const onChangeEvent = (e) =>{
        setSearch(e.target.value)
      }

     const onCLickDeleteStudent = (CompanyName, sid) =>{
                const items = {students};
            const j = items[name].findIndex(item => item.FamilyName === sid);

            items[name].splice([j], 1);

            // setStudents({
            //   myrecords: items
            // });
     }
      
         const filteredMonster = students.filter(student => student.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div>

            <input type='search' placeholder="search students" onChange={onChangeEvent}/>

            <button onClick={onClickAddNewStudent}>add new student</button>

            <button   onClick={onCLickDeleteStudent}>   delete student </button>

            <div className="hid sidebar-toggle">
              <AddPetForm setPets={setStudents} />
            </div>
            <CardList students={filteredMonster}/>
        </div>
    )
}

export default Function










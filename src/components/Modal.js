
import axios from 'axios';
import { useState } from 'react';
import './List/modal.css'

export function Modal({closeModal}){
   const [ result , setResult ] = useState([]);
   const [ name , setName ] = useState('');
   const [ position , setPosition ] = useState('');
   const [ office , setOffice ] = useState('');
   const [ age , setAge ] = useState('');
   const [ startDate , setStartDate ] = useState('');
   const [ salary , setSalary ] = useState('');
    return (
        <>
        <div className='modalBackground' onClick={() => {
               closeModal(false);
            }}>
        </div>
        <div className="modalContainer">
            <div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingInput" placeholder="Name" value={name} onChange={(e) => {setName(e.target.value)}}/>
  <label for="floatingInput">Name</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingPassword" placeholder="Position"value={position} onChange={(e) => {setPosition(e.target.value)}} />
  <label for="floatingPassword">Position</label>
</div>
<div class="form-floating mb-3">
  <input type="text" class="form-control" id="floatingPassword" placeholder="Office" value={office} onChange={(e) => {setOffice(e.target.value)}}/>
  <label for="floatingPassword">Office</label>
</div>
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingPassword" placeholder="Age" value={age} onChange={(e) => {setAge(e.target.value)}}/>
  <label for="floatingPassword">Age</label>
</div>
<div class="form-floating mb-3">
  <input type="date" class="form-control" id="floatingPassword" placeholder="Start Date" value={startDate} onChange={(e) => {setStartDate(e.target.value)}}/>
  <label for="floatingPassword">Start Date</label>
</div>
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingPassword" placeholder="Salary" value={salary} onChange={(e) => {setSalary(e.target.value)}}/>
  <label for="floatingPassword">Salary</label>
</div>
<div class="col-md-4" >

        <button className="btn btn-primary" style={{left : 70}} onClick={() => {
               closeModal(false);
               axios.post('https://jsonplaceholder.typicode.com/user', {
               name, 
               position , 
               office, 
               age,
               startDate, 
               salary
              } 
               ).then ( (res) => {
                console.log('POst data' , res )
               setResult(res.data) 
              })
              .catch((err) => console.error(err))
            }}>ADD</button>
                        </div>
            </div>
        </>
    )
}

 
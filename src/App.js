// import logo from './logo.svg';
// import './App.css';
// //import 'bootstrap/dist/css/bootstrap.min.css';
// import {useState, userData} from 'react';
// import axios from 'axios';


// function App() {
//   const[name,setName]=useState("")
//   const[email,setEmail]=useState("")
//   const[mobile,setMobile]=useState("")

//   const userData = () => {
//     let data = {name,email,mobile}
//     const res = axios.post("http://localhost:3000/user", data)
//     alert ("data has been saved")
//   }
//   return (
//     <div className="App">
//      <input type="text"value={name} onChange = {(e) =>{setName(e.target.value)}}/> <br/>
//      <input type="text"value={email}  onChange = {(e) =>{setEmail(e.target.value)}}/> <br/>
//      <input type="text"value={mobile} onChange = {(e) =>{setMobile(e.target.value)}}/> <br/>
//      <button type ="button" onClick ={userData}>Save user Data</button>
//     </div>
//   );
// }

// export default App;

//----

// import logo from './logo.svg';
// import './App.css';
// import axios from 'axios'
// import { useEffect, useState } from 'react';

// function App() {

//   // const[name,setName]=useState("")
//   // const[email,setEmail]=useState("")
//   // const[mobile,setMobile]=useState("")
//   // const [id,setId]=useState(null)

// const [data, setData] = useState([]);

// useEffect(() => {
// getData();
// console.log("useeffect called");
// }, [])

// const getData = async () => {
// const resp = await axios.get("http://localhost:3000/user");
// console.log(resp.data)
// setData(resp.data)

// }
// const deleteuser=async (id)=>{
// const resp = await axios.delete(`http://localhost:3000/user/${id}`);
// getData();
// }
   

// return (
// <div className="App">


//   <table className="table">
//     <thead>
//       <tr>
//         <th scope="col">id</th>
//         <th scope="col">Name</th>
//         <th scope="col">Email</th> 
//         <th scope="col">Mobile</th>
//         <th scope="col">Delete Data</th>  
        
//       </tr>
//     </thead>
//     <tbody>
//       {
//         data.map((u, index) => (

//           <tr>
//             <th scope="row">  {index + 1}</th>
//             <td>{u.name}</td>
//             <td>{u.email}</td>
//             <td>{u.mobile}</td>
//             <td><button onClick={()=>deleteuser(u.id) } >Delete</button></td>
//           </tr>

//         ))

//       }
//     </tbody>
//   </table>


// </div>
// );
// }

// export default App;

//----

import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState([]);

  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[mobile,setMobile] = useState("")

  const[userid,setUserId]=useState(null)
  
  
  useEffect(() => {
    getData();
    console.log("useeffect called");
  }, [])

  const getData = async () => {
    const resp = await axios.get("http://localhost:3000/user");
    console.log(resp.data)
    setData(resp.data)

   
    
  }
  const deleteuser = async (id) => {
  const resp = await axios.delete(`http://localhost:3000/user/${id}`);
  console.log(resp.data)
  getData ();

  }

  //prefilled form
  const selectuser = (id)=>{
    let item = data[id-1]
    console.log(item);
    setName(item.name)
    setEmail(item.email)
    setMobile(item.mobile)
    setUserId(item.id)
    
  }

  //fun for updating data
  const updateuser = () => {
    console.log(name,email,mobile,userid)
    let item = {name,email,mobile,userid}
    axios.put(`http://localhost:3000/user/${userid}`,item);
    getData ();

  }

  return (
    <div className="App">

      <table className="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((u, index) => (

              <tr>
                <th scope="row">  {index + 1}</th>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.mobile}</td>
                <td><button onClick={()=>deleteuser(u.id)}>Delete</button></td>
                <td><button onClick={()=>selectuser(u.id)}>Update</button></td>
              </tr>

            ))

          }
        </tbody>
      </table>

      <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/> <br /><br />
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br /><br />
        <input type="text" value={mobile} onChange={(e)=>{setMobile(e.target.value)}}/><br /><br />
        <button onClick={updateuser}>Update User</button>
      </div>


    </div>
  );
}

export default App;

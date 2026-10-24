import { useState } from 'react';

const users = [
  {id: 1,name: 'Mohit',role: 'admin'},
  {id: 2,name: 'Akshay',role: 'manager'},
  {id: 3,name: 'Rohit',role: 'employee'},
];

function App() {
  // States
  const [currentUser, setCurrentUser] = useState(users[0]);

  //functions
  const handleUserChange = (e) => {
    const selectedUser = users.find((user)=> user.id === Number(e.target.value));
    console.log(selectedUser);
    setCurrentUser(selectedUser);
  }
  return (
    <>
      <h2>RBAC POC</h2>
      <div>
        <label>Select User: </label>
        <select onChange={handleUserChange}>
          {
            users.map((user)=> {
              return(
              <option value={user.id} key={user.id}>{user.name} - {user.role}</option>
              )
            })
          }
        </select>
      </div>
      <div className='menu'>
        <h3>Menu</h3>
        {
          currentUser.role === 'admin' && (
            <ul>
              <li>Dashboard</li>
              <li>Users</li>
              <li>Reports</li>
              <li>Settings</li>
            </ul>
          )
        }
        {
          currentUser.role === 'manager' && (
            <ul>
              <li>Dashboard</li>
              <li>Users</li>
              <li>Reports</li>
            </ul>
          )
        }
        {
          currentUser.role === 'employee' && (
            <ul>
              <li>Dashboard</li>
            </ul>
          )
        }
      </div>
    </>
  )
}

export default App

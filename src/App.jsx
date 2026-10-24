import { useState } from 'react';

const users = [
  {id: 1,name: 'Mohit',role: 'admin'},
  {id: 2,name: 'Akshay',role: 'manager'},
  {id: 3,name: 'Rohit',role: 'employee'}
];

const menuItems = [
  { id: "dashboard", label: "Dashboard" },
  { id: "users", label: "Users" },
  { id: "reports", label: "Reports" },
  { id: "settings", label: "Settings" }
];

const roleAccess = {
  admin: ["dashboard", "users", "reports", "settings"],
  manager: ["dashboard", "users", "reports"],
  employee: ["dashboard"]
};

function App() {
  // States
  const [currentUser, setCurrentUser] = useState(users[0]);
  const allowedItems = roleAccess[currentUser.role] || [];

  //functions
  const handleUserChange = (e) => {
    const selectedUser = users.find((user)=> user.id === Number(e.target.value));
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
          menuItems.filter((item)=> allowedItems.includes(item.id)).map((item)=>(
            <div key={item.id}>{item.label}</div>
          ))
        }
      </div>
    </>
  )
}

export default App

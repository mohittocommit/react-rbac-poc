import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({
    name: 'Mohit',
    role: 'manager',
  })
  return (
    <>
      <h2>Hello, {user.name}</h2>
      <p>Your role is: {user.role}</p>
      <h3>Menu</h3>
      {
        user.role === 'admin' && (
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Reports</li>
            <li>Settings</li>
          </ul>
        )
      }
      {
        user.role === 'manager' && (
          <ul>
            <li>Dashboard</li>
            <li>Users</li>
            <li>Reports</li>
          </ul>
        )
      }
      {
        user.role === 'employee' && (
          <ul>
            <li>Dashboard</li>
          </ul>
        )
      }
    </>
  )
}

export default App

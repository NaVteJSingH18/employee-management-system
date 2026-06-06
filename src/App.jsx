import React, { useContext, useEffect } from 'react'

import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

import { useState } from 'react'
import { AuthContext } from './context/AuthProvider'
const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
   const loggedInUser =localStorage.getItem('loggedInUser')
if(loggedInUser && loggedInUser !== ''){
  const userData = JSON.parse(loggedInUser)
  setUser(userData?.role || null)
  setLoggedInUserData(userData?.data || null)
}
  }, [])

  // Listen for changes to employees data in localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      // If user is an employee, refresh their data from localStorage
      if(user === 'employee' && loggedInUserData?.email) {
        const employeesData = JSON.parse(localStorage.getItem('employees')) || []
        const updatedEmployee = employeesData.find(e => e.email === loggedInUserData.email)
        if(updatedEmployee) {
          setLoggedInUserData(updatedEmployee)
          // Also update the stored loggedInUser
          localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: updatedEmployee}))
        }
      }
    }

    // Listen to storage events (when localStorage changes)
    window.addEventListener('storage', handleStorageChange)
    
    // Also poll for changes every 2 seconds to catch local updates
    const interval = setInterval(handleStorageChange, 2000)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [user, loggedInUserData?.email])
  


  const handleLogin = (email,password)=>{
    if(email=="admin@gmail.com"&& password=="123"){
      setUser("admin")
      setLoggedInUserData({name: "Admin", role: "admin"})
      localStorage.setItem('loggedInUser',JSON.stringify({role:"admin", data:{name: "Admin", role: "admin"}}))
    } else if(authData?.employees){
      const employee = authData.employees.find((e)=>email===e.email && password=== e.password)
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:"employee",data:employee}))
      } else {
        alert("Invalid credentials")
      }
    } else {
      alert("Please wait, loading employee data...")
    }
  }
  return (
    <>
{  !user ?  <Login handleLogin = {handleLogin}/>:""
}   
{user === "admin" && <AdminDashboard  changeUser={setUser}  data={loggedInUserData} />}

  {user === "employee" && <EmployeeDashboard  changeUser={setUser}   data={loggedInUserData} />}


    </>
  )
}

export default App

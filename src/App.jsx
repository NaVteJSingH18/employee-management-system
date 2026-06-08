import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  // Theme State Management
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser && loggedInUser !== ''){
      const userData = JSON.parse(loggedInUser)
      setUser(userData?.role || null)
      setLoggedInUserData(userData?.data || null)
    }
  }, [])

  useEffect(() => {
    const handleStorageChange = () => {
      if(user === 'employee' && loggedInUserData?.email) {
        const employeesData = JSON.parse(localStorage.getItem('employees')) || []
        const updatedEmployee = employeesData.find(e => e.email === loggedInUserData.email)
        if(updatedEmployee) {
          setLoggedInUserData(updatedEmployee)
          localStorage.setItem('loggedInUser', JSON.stringify({role: 'employee', data: updatedEmployee}))
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    const interval = setInterval(handleStorageChange, 2000)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [user, loggedInUserData?.email])
  
  const handleLogin = (email, password) => {
    if(email === "admin@gmail.com" && password === "123"){
      setUser("admin")
      setLoggedInUserData({name: "Admin", role: "admin"})
      localStorage.setItem('loggedInUser', JSON.stringify({role:"admin", data:{name: "Admin", role: "admin"}}))
    } else if(authData?.employees){
      const employee = authData.employees.find((e) => email === e.email && password === e.password)
      if(employee){
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:"employee", data:employee}))
      } else {
        alert("Invalid credentials")
      }
    } else {
      alert("Please wait, loading employee data...")
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 selection:bg-emerald-500/30 selection:text-emerald-900 dark:selection:text-emerald-200 transition-colors duration-300">
      
      {/* FIX: Changed from 'absolute top-6 right-6' to 'fixed bottom-6 right-6'.
        Added glassmorphic borders and a deep shadow so it floats cleanly above your tasks.
      */}
      <button 
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-xl border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-white font-medium text-sm hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        {theme === 'light' ? (
          <><span>🌙</span> Dark Mode</>
        ) : (
          <><span>☀️</span> Light Mode</>
        )}
      </button>

      {!user ? <Login handleLogin={handleLogin}/> : null}
      {user === "admin" && <AdminDashboard changeUser={setUser} data={loggedInUserData} />}
      {user === "employee" && <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </div>
  )
}

export default App
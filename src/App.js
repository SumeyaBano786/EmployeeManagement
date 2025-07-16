import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginPage from './components/LoginPage.jsx';
import EmployeeForm from './components/EmployeeForm.jsx';
import EmployeeList from './components/EmployeeList.jsx'

const App = () => {
  return (
   <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<LoginPage/>}/>

  <Route path="/employees" element={<EmployeeList/> }/>
  <Route path="/employee/add" element={<EmployeeForm/> }/>
</Routes>
</BrowserRouter>
   
   
   </>
  )
}

export default App

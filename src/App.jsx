import { Route, Routes } from 'react-router-dom'
import './App.css'
import EmpForm from './EmpForm'
import EmpTable from './EmpTable'
function App() {
	return (
		<>
		<Routes>
		<Route path='/table' element={<EmpTable/>}/>
		<Route path='/' element={<EmpTable/>}/>
		<Route path='/form' element={<EmpForm/>}/>
		</Routes>
		</>
	)
}

export default App

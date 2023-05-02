import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import { Home } from './home'
import AdminPanel from './AdminPanel'
import Login from './Login'

function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/admin" element={<AdminPanel/>}/>
<Route path="/login" element={<Login/>}/>
</Routes>
</BrowserRouter>
)
}
export default App

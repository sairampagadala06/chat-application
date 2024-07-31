import { useState } from 'react'
import {BrowserRouter ,Routes,Route} from "react-router-dom"
import Login from './login/login';
import Chat from './chat/chat';
function App() {
return (
  <BrowserRouter>
<Routes>
  <Route index element={<Login/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/chat' element={<Chat/>}/>

</Routes>
</BrowserRouter>
  );
}

export default App

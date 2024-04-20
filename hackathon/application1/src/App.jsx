import LoginUser from "./pages/login";
import RegisterUser from "./pages/register";
import Home from "./pages/home";
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <LoginUser/>} />
        <Route path='/login' element={ <LoginUser/>} />
        <Route path='/register' element={ <RegisterUser/>} />
        <Route path='/home' element={ <Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;

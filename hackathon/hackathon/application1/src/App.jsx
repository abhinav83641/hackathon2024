import LoginUser from "./pages/login";
import RegisterUser from "./pages/register";
import Home from "./pages/home";
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from './components/navbar'
import BlogsList from "./pages/blogslist";
import CategoryList from "./pages/categorylist"
import CreateBlog from "./pages/createblog"
import EditDeleteBlog from "./pages/editdelete"


function App() {
  const user = useSelector((state) => state.user)
  return (
    <div className='container-fluid'>
      {user.loginStatus && <Navbar />}
      
    <div className="container" >
      <Routes>
        <Route path='/' element={ <LoginUser/>} />
        <Route path='/login' element={ <LoginUser/>} />
        <Route path='/register' element={ <RegisterUser/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/bloglist' element={<BlogsList />} />
          <Route path='/categorylist' element={<CategoryList />} />
          <Route path='/createblog' element={<CreateBlog />} />
          <Route path='/editdelete' element={ <EditDeleteBlog/>} />
      </Routes>
      
      </div>
      </div>
  );
}

export default App;

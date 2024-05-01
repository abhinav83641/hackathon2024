import { useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutAction } from '../features/userSlice'

function Navbar() {
 
  // get the navigate object
  const navigate = useNavigate()
  const dispatch = useDispatch()
 

  const onLogout = () => {
   
    dispatch(logoutAction())

    // navigate to login page
    navigate('/login')
  }

  return (
 
    <nav
      data-bs-theme='dark'
      className='navbar bg-dark navbar-expand-lg bg-body-tertiary'
    >
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          MY BLOGS
        </a>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/home' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/categorylist' className='nav-link'>
                Category
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/bloglist' className='nav-link'>
                Blog List
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/createblog' className='nav-link'>
                Create Blog
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/editdelete' className='nav-link'>
                Edit/Delete Blog
              </Link>
            </li>
           
            

            <li className='nav-item'>
              <a className='nav-link' onClick={onLogout}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
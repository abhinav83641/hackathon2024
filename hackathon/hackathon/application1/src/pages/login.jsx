import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import { login } from '../services/user'
import { useDispatch } from 'react-redux'
import { loginAction } from '../features/userSlice'


function LoginUser() {
    const [email, setEmail] = useState('')
    const [password,setPassword]= useState('')
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const onLogin = async () => {
        // client side validation
        console.log('found')
        if (email.length === 0) {
            alert('enter email')
        } else if (password.length === 0) {
            alert('enter password')
        } else {
            const result = await login(email, password)
         
            if (result['status'] === 'success') {
            
                dispatch(loginAction())
                navigate('/home')
            } else {
              alert('invalid email or password')
            }
        
        }
    }
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    return (
        <div>
            <div className="row">
                <div className="col"></div>
                <div className="col"> <div className="page-title">LOGIN</div>
            <label htmlFor="">Email</label>
            <input onChange={(e) => {
                    setEmail(e.target.value)
                  }} type="email" className="form-control" />

            <label htmlFor="">Password</label>
                    <input onChange={(e) => {
                    setPassword(e.target.value)
                  }} type="password" className="form-control" />
                    <br /><br />
                    <div htmlFor="">Dont have an account yet?{' '} <Link to ='/register'>Register here</Link> </div>
                    <button onClick={onLogin} className="btn btn-success">LOGIN</button></div>
                
                
                <div className="col"></div>
            </div>
           
        
            
        
        </div>
    )
}

export default LoginUser
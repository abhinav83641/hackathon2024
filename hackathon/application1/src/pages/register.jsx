import {Link, useNavigate} from'react-router-dom'
import { register } from '../services/user'
import {useState} from 'react'

function RegisterUser() {
    const navigate = useNavigate()
    const onCancel = ()=>{navigate('/login')}
   
   const [full_name,setFullName]=useState('')
   
    const [email, setEmail] = useState('')
    
    const [password, setPassword] = useState('')
    const [phone_no, setPhoneNo] = useState('')

    const onRegister = async () => {
        if (full_name.length === 0) {
            alert('enter first name')
        } 
         else if (email.length === 0) {
            alert('enter email')
        } else if (phone_no.length === 0) {
            alert('enter phone number')
        } else if (password.length === 0) {
            alert('enter password')
        
        
        } else {
            const result = await register(full_name, email,  password,phone_no)
            if (result['status'] === 'success') {
                alert('successfully registered a user')
                navigate('/login')
            } else {
                alert('failed to register the user')
            }

        }

        }
    
    
    

   
   
   
   
   
   
   
   
   
   
   
   
    return (
        <div>
            <div className="page-title">REGISTER</div>
            
            <div className="row">
                <div className="col"></div>
                <div className="col">

                <label htmlFor="">First Name</label>
                <input onChange={(e) => {
                    setFullName(e.target.value)
                  }}type="text" name="" id="" className="form-control" />

               

                <label htmlFor="">Email</label>
                <input onChange={(e) => {
                    setEmail(e.target.value)
                  }}type="email" name="" id="" className="form-control"/>

               

                <label htmlFor="">Password</label>
                <input onChange={(e) => {
                    setPassword(e.target.value)
                    }} type="password" name="" id="" className="form-control" />
                    
                    <label htmlFor="">Phone No</label>
                <input onChange={(e) => {
                    setPhoneNo(e.target.value)
                  }}type="tel" name="" id="" className="form-control"/>

              
                    <br /><br />
                    <div htmlFor="">Already a user? <Link to='/login'>Click here to Login</Link></div>
                    <button onClick={ onRegister} className="btn btn-success">REGISTER</button>
                <button onClick={onCancel} className="btn btn-danger ms-2" >CANCEL</button>
                </div>
                
                <div className="col"></div>
            </div>
                

        </div>
        



    )
}

export default RegisterUser
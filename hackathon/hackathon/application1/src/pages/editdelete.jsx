import {Link, useNavigate} from'react-router-dom'
import { deleted } from '../services/user'
import { useState } from 'react'


function EditDeleteBlog() {
//     const navigate = useNavigate()
    
   
//    const [title,setTitle]=useState('')
   
//     const [contents, setContents] = useState('')
    
//     const [userid, setUserId] = useState('')
//     const [catid, setCatId] = useState('')

//     const onRegister = async () => {
//         if (title.length === 0) {
//             alert('enter title')
//         } 
//          else if (contents.length === 0) {
//             alert('enter contents')
//         } else if (userid.length=== 0) {
//             alert('enter user id')
//         } else if (catid.length === 0) {
//             alert('enter cat id')
        
        
//         } else {
//             const result = await create(title, contents, userid, catid)
//             if (result['status'] === 'success') {
//                 alert('Blog added')
//                 navigate('/bloglist')
//             } else {
//                 alert('failed to add blog')
//             }

//         }

//         }
    
    
    

   
   
   
   
   
   
   
   
   
   
   
   
//     return (
//         <div>
//             <div className="page-title">EDIT/DELETE</div>
            
//             <div className="row">
//                 <div className="col"></div>
//                 <div className="col">

//                 <label htmlFor="">Title</label>
//                 <input onChange={(e) => {
//                     setTitle(e.target.value)
//                   }}type="text" name="" id="" className="form-control" />

               

//                 <label htmlFor="">Contents</label>
//                 <input onChange={(e) => {
//                     setContents(e.target.value)
//                   }}type="email" name="" id="" className="form-control"/>

               

//                 <label htmlFor="">User ID</label>
//                 <input onChange={(e) => {
//                     setUserId(e.target.value)
//                     }} type="password" name="" id="" className="form-control" />
                    
//                     <label htmlFor="">Category ID</label>
//                 <input onChange={(e) => {
//                     setCatId(e.target.value)
//                   }}type="tel" name="" id="" className="form-control"/>

              
//                     <br /><br />
                    
//                     <button onClick={ onRegister} className="btn btn-success">CREATE</button>
                
//                 </div>
                
//                 <div className="col"></div>
//             </div>
                

//         </div>
        



//     )
}

export default EditDeleteBlog
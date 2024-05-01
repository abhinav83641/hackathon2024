import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import config from '../config'
import axios from 'axios'
import Blogs from '../components/blog'



function BlogsList() {
    
    const [blogs, setBlogs] = useState([])
  
    
    const loadBlogs = async () => {
      // send the request and get the response
      const response = await axios.get(`http://localhost:4000/blogs/viewall`)
  
      // read the json data from response
      const result = response.data
     
  
      // update the state
      setBlogs(result['data'])
    }
  
    const onButtonClick = () => {
      loadBlogs()
    }
    
    return (
        <div>
          <h3>Sunbeam Blogs</h3>
    
          <button onClick={onButtonClick} className='btn btn-success'>
            Load Blogs
          </button>
    
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Category</th>
                <th>Date</th>
                <th>Author</th>
               
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => {
                return (
                  <Blogs
                    id={blog.ID}
                    title={blog.TITLE}
                    category={blog.TITLE1}
                    date={blog.TIME1}
                    author={blog.NAME1}
                   
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      )
}

export default BlogsList
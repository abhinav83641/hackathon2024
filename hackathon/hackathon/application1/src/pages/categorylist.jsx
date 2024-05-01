import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import config from '../config'
import axios from 'axios'
import Category from '../components/category'



function CategoryList() {
    
    const [CATEGORY, setCategory] = useState([])
  
    
    const loadBlogs = async () => {
      // send the request and get the response
      const response = await axios.get(`http://localhost:4000/categories/showcategories`)
  
      // read the json data from response
      const result = response.data
     
  
      // update the state
      setCategory(result['data'])
    }
  
    const onButtonClick = () => {
      loadBlogs()
    }
    
    return (
        <div>
          <h3>Sunbeam Categories</h3>
    
          <button onClick={onButtonClick} className='btn btn-success'>
            Load Categories
          </button>
    
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Category</th>
              
              </tr>
            </thead>
            <tbody>
              {CATEGORY.map((cat) => {
                return (
                  <Category
                    id={cat.id}
                    category={cat.title}
                    
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      )
}

export default CategoryList
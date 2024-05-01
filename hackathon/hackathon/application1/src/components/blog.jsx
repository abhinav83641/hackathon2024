function Blogs({ id, title, category,date, author}) {
    return (
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>{date}</td>
        <td>{author}</td>
      
      </tr>
    )
  }
  
  export default Blogs
  
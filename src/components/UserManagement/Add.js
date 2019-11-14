import React from 'react'
//import stylesManagement from "./UserManagement.css";


const UserManagementAdd = props => {
  return (
    <form onSubmit={props.addItem}>      
      <input type="text" name="addname" value="" ref={props.action}/>    
      <input type="text" name="addusername" value="" ref={props.action} />
      <button type="submit">Add new user</button>
    </form>
  )
}




export default UserManagementAdd
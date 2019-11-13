import React from "react";
import stylesManagement from "./UserManagement.css";

const userManagement = props => {
  return (
    
        <tbody className={stylesManagement.left}>
          <tr>
            <td >{props.mgname} </td>
            <td>{props.mgusername}</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        </tbody>
      
  );
};

export default userManagement;

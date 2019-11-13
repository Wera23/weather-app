import React from "react";
import stylesManagement from "./UserManagement.css";

const userManagement = props => {
  return (
    
        <tbody className={stylesManagement.left}>
          <tr>
            <td >{props.mgname} </td>
            <td>{props.mgusername}</td>
            <td>
              <button onClick={props.click} >Delete</button>
            </td>
          </tr>
        </tbody>
      
  );
};

export default userManagement;

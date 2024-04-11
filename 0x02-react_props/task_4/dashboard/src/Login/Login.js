import React from "react";
export const Login = () => {
return(
    <> 
    <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label>
          Email:
          <input type ='email'/>
        </label>
        <label>
          Password:
          <input type= 'password'/>
        </label>
        <button>OK</button>
      </div>
    </>
);
}
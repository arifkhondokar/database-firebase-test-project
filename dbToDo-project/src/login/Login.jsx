import React, { useState } from 'react'
import './login.css'
import { getDatabase, ref, set, push } from "firebase/database";

const Login = () => {
    const database = getDatabase();
    let [info, setInfo] = useState (
        {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        }
    )

    let handelForm = (e) => {
        let {name, value} = e.target
    setInfo({...info, [name]:value });
    }
    let handelSubmit = () => {
        set(push(ref(database, "userInfo")), {
            logIn: info,
          })
    }



  return (
    <>
    <section id ="login_section">
        <div className ="form-content">
            <h2>LOGIN</h2>
            <form action="#">
                <div className ="input-field">
                    <input name ="firstName" type='text' placeholder='Enter Your FirstName' onChange={handelForm} required/>
                </div>
                <div className ="input-field">
                    <input name ="lastName" type='text' placeholder='Enter Your LastName' onChange={handelForm} required/>
                </div>
                <div className ="input-field">
                    <input name ="email" type='email' placeholder='Enter Your Email'  onChange={handelForm} required/>
                </div>
                <div className ="input-field">
                    <input name ="password" type='password' placeholder='Enter Your Password'  onChange={handelForm} required/>
                </div>
                
                <button name ="submit" onClick={handelSubmit}>Log In</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default Login
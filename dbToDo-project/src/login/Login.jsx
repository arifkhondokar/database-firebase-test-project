import React, { useState } from 'react'
import './login.css'
import { getDatabase, ref, set, push } from "firebase/database";

const Login = () => {
    const database = getDatabase();
    let [info, setInfo] = useState (
        {
            fullName: "",
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
                    <input name ="fullName" placeholder='Enter Your Name' onChange={handelForm} required/>
                </div>
                <div className ="input-field">
                    <input name ="email" placeholder='Enter Your Email'  onChange={handelForm} required/>
                </div>
                <div className ="input-field">
                    <input name ="password"placeholder='Enter Your Password'  onChange={handelForm} required/>
                </div>
                
                <button name ="submit" onClick={handelSubmit}>Log In</button>
            </form>
        </div>
    </section>
    </>
  )
}

export default Login
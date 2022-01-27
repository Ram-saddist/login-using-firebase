import React , { Component } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "./firebaseConfig";

class Login extends Component{
constructor(props)
{
    super(props);
    this.state={
        email : "",
        password : ""
    }
}
login=(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth,this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signup=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,this.state.email,this.state.password)
    .then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange=(e)=>{
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{
    return(
        <div>
            <input
                type="email"
                name="email"
                placeholder="enter email address"
                onChange={this.handleChange}
                value={this.state.email}
                />
            <input
                name="password"
                type= "password"
                onChange={this.handleChange}
                placeholder="enter password"
                value={this.state.password}
                />
                <button onClick={this.login}>Login</button>
                <button onClick={this.signup}>Signup</button>

        </div>
    )
}
}
export default Login;
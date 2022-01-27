import React , { Component } from "react";
import {signOut} from "firebase/auth";
import { auth } from "./firebaseConfig";

class Home extends Component{
    state={
        name:this.props.res.split('@gmail.com')
    }
    componentDidMount(){

    }
    logout=()=>{
        signOut(auth);
    }
    render()
    {
        return(
            <div>
               <h1>Welcome {this.state.name} You are logged in !!!</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
export default Home;
import React from 'react';
import Login from './Login'
import Home from './Home'
import { onAuthStateChanged} from "firebase/auth";
import { auth } from "./firebaseConfig";

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state={
      accountHolder : ""
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    onAuthStateChanged(auth, (currentUser) => {
      this.setState({accountHolder:currentUser})
    });
  }

  render(){
    return (
      <div className="App">
        {this.state.accountHolder ? (<Home res={this.state.accountHolder.email}/>) : (<Login/>)}
      </div>
    );
  }
}
export default App;

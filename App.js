import React,{Component} from "react";
import "./App.css";
import Register from "./components/Register";
import Good from "./components/Good.js";


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isRegister : false,
      name:null,
      email:null,
      password:null,
      contactno:null,
      showpass:false,
    };
  }
  registationhandle = (event) => {
  const name=event.target.name.value;
  const email=event.target.email.value;
  const password=event.target.password.value;
  const contact=event.target.contactno.value;
  this.setState({name,email,password,contact,isRegister:true});
  event.preventDefault();
  };
  
  showPasshandler =() =>{

    this.setState({showpass:!this.state.showpass});
  };

  render() {
    return (
    <div>
      {
      this.state.isRegister ? (<Good name ={this.state.name} email={this.state.email} showpass={this.state.showpass}></Good> ): (<Register submit={this.registationhandle}
      showpass={this.state.showpass} click = {this.showPasshandler}></Register>)}
      </div>
    );

  }
}
export default App;

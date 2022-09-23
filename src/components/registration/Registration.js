import React from "react";
import styles from "./Registration.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
class Registration extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      email:'',
      phone:'',
      password:'',
      confirmpassword:'',
      country:''
    }
  }


  onChangeName = (e) =>{
    this.setState({name:e.target.value})
  }

  onChangeEmail = (e) =>{
    this.setState({email:e.target.value})
  }

  onChangePhone = (e) =>{
    this.setState({phone:e.target.value})
  }

  onChangePassword = (e) =>{
    this.setState({password:e.target.value})
  }
  onChangeConfirmassword = (e) =>{
    this.setState({confirmpassword:e.target.value})
  }
  onChangeCountry = (e) =>{
    this.setState({country:e.target.value})
  }

  onSubmit = (e) =>{
    let ob = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
      confirmpassword: this.state.confirmpassword,
      country: this.state.country
    }
    let olddata = localStorage.getItem('formdata');
    const navigate = useNavigate();
    if(olddata==null){
      olddata = []
      olddata.push(ob)
      localStorage.setItem('formdata', JSON.stringify(olddata));
      console.log("registration");
      navigate("/login");
      alert("Registration Successfully Completed")
    }else{
      let oldArr = JSON.parse(olddata)
      oldArr.push(ob)
      localStorage.setItem("formdata", JSON.stringify(oldArr))
      console.log(oldArr,'hhg')
    }
  }
  render() {
    return (
      <section>
      <form onSubmit={this.onSubmit}>  
        <h2>Registration Page</h2>
          <label>Full Name</label>
          <input type="text" value={this.state.name} onChange={this.onChangeName} required />  
          <label>Email Address</label>
          <input type="email" value={this.state.email} onChange={this.onChangeEmail} required />
          <label>Phone Number</label>
          <input type="phone"  value={this.state.phone} onChange={this.onChangePhone} required />
          <label>Country Name</label>
          <input type="text" value={this.state.country} onChange={this.onChangeCountry} required />
          <label>Password</label>
          <input type="password" value={this.state.password} onChange={this.onChangePassword} required />
          <label>Confirm Password</label>
          <input type="password" value={this.state.confirmpassword} onChange={this.onChangeConfirmassword} required />
          <button type="submit"  onClick={this.props.onRegister}><Link to="/login"> Registration </Link></button>

      </form>
      </section>
      )
    }
  };

export default Registration;

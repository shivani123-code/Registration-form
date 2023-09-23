import React from 'react';
import Styled from 'styled-components';

export default function Register(props) {
  let btnStyle,passwordbox;
   btnStyle = {
    backgroundColor:"green",
    color:"white",
  };
  let btntext ="show password";
  passwordbox="text";
  if(props.showpass===true) {
    btnStyle.backgroundColor="red";
    btntext = "hide Password";
    passwordbox="password";

  }
  const StyledButton =  Styled.button`
  display:${(props => props.flag ? "inline-block" : "block")};;
  padding:10px 5px;
  background-color:${(props) => props.color};
  border:none;
  width:${(props => props.flag ? "45%" : "100%")};
  margin:5px;
  border-radius:5px;
  color:white;
  `;
  const StyleRegister = Styled.div`
  width:500px;
  &:hover{
    box-shadow:0px 0px 5px gray;
  }
  @media (min-width:0px) and (max-width:600px){
    width:300px;
  }
  ;
  `
  ;
  
  
  return (
    <StyleRegister className="container card p-4 mt-3  register-continer">
        <form onSubmit={props.submit}>
          <h1 className='text-center'>Registration-Form</h1>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name"  className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email"  className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type={passwordbox} name="password"  className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="contactno">Contact-No</label>
                <input type="number" name="contactno"  className="form-control"/>
            </div>
           
            <button type="submit" className='btn btn-primary m-1'>Register</button>
            <button type="button" className="btn m-1" onClick={props.click} style={btnStyle}>{btntext}</button>
            <br/>
            <StyledButton type="button" color="orange" flag="1"> Log in </StyledButton>
            <StyledButton type="button" color="green" flag="1"> Login with Google </StyledButton>
            <StyledButton type="button" color="purple" flag="0"> Login with Facebook </StyledButton>
            <StyledButton type="button" color="black" flag="0"> Login with GitHub </StyledButton>
        </form>
        </StyleRegister>
      
    
  );
}

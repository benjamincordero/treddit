import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';

class Login extends Component{

   constructor(props){
      super(props);
      this.state = {
         email:'',
         password:''
      }
   }

   syncLogin(value, prop){
      let state ={};

      state[prop] = value;

      this.setState(state);

   }

   submitLogin(){
      alert('Bienvenido '+this.state.email);
   }

   render(){
      return (
         <div>
            <Form onSubmit={ (ev) =>{this.submitLogin()}} className="col-md-4 offset-md-4 ">
               <Form.Group controlId="formBasicEmail">
                     <Form.Label>Email address</Form.Label>
                     <Form.Control type="email" 
                     value={this.state.email}
                     onChange={ (ev) =>{this.syncLogin(ev.target.value, 'email')} } placeholder="Enter email" />
                     <Form.Text className="text-muted">
                     We'll never share your email with anyone else.
                     </Form.Text>
               </Form.Group>

               <Form.Group controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                     <Form.Control type="password" value={this.state.password}
                     onChange={ (ev) =>{this.syncLogin(ev.target.value, 'password')} } placeholder="Password" />
               </Form.Group>
               <Form.Group controlId="formBasicCheckbox">
                     <Form.Check type="checkbox" label="Check me out" />
               </Form.Group>
               <Button variant="primary" type="submit">
                     Submit
               </Button>
            </Form> 
         </div>       
      );
   }
}
export default Login;

import React, {useState} from "react";
import PropTypes  from "prop-types";
import axios from "axios";
import "./form.css"







class Form extends React.Component {
  state = {
     name:'',
     email:'',
     message:'',
     emailStutus:''
  }

handleChange = input=> e =>{
    this.setState({
      [input]: e.target.value
    });
}

submitForm = (e) =>{
 //console.log(this.state);

  e.preventDefault();

 var request=axios({
    method: "get",
    url:'http://localhost/EpsiWeb/api/contact/index.php',
    //headers: {"Content-type":"Application/json"},
    params:{
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }
  })

  console.log(request);
}


render(){
  
  const {

    name,
    email,
    message

  }= this.state;


return(

  
  <div class="modal fade" id="exampleModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

       <form className="form-control" onSubmit={this.submitForm}>
        <input type="text" label="Nombre" name="nombre"  placeholder="Nombre" onChange={this.handleChange('name')} value={name}/>

        <input type="email" className="text" name="email" placeholder="email" required onChange={this.handleChange('email')} value={email}/>
        
        <textarea name="mensaje" id="" cols="30" rows="10" required placeholder="Mensaje" onChange={this.handleChange('message')} value={message}></textarea>

        <button type="submit" className="btn">Enviar</button>
       </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>

  







)
}
}

export default Form
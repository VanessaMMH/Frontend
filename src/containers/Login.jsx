import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from "../actions";
import '../styles/components/Login.styl';
import Header from '../components/Header';
import Footer from '../components/Footer';

import axios from 'axios';

const Login = props => {
  const [form, setValues] = useState({
    persona:{
    nombre: null,
    apellido: null,
    telefono: null,
    correo:null,
    direccion:null,
    distrito:null,
    fecha:null,
    tipo_problema:null,
    descripcion:null
   }
  });
 
  const updateInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    console.log(form);
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');


    axios({
      method:'POST',
      url:'http://localhost:8080/api/save',
      data:form
    }).then(res=>console.log(res))
  }

  return (
    <>
      <Header />
      <section className="login">
        <section className="login__container">
          <h3>¿Qué <strong> necesitas</strong> ?</h3>
          <span>Completa el formulario y te asignaremos un profesional a tu tipo de problema.</span>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <div className="column1">
              <label for="nombre">Nombre</label>
              <input 
                name="nombre"
                className="input"
                type="text"
                required
                onChange={updateInput}
              />
              <label for="apellido">Apellido</label>
              <input 
                name="apellido"
                className="input"
                type="text"
                required
                onChange={updateInput}
              />
              <label for="telefono">Telefono</label>
              <input 
                name="telefono"
                className="input"
                type="text"
                required
                onChange={updateInput}
              />
              <label for="correo">Correo electrónico (opcional)</label>
              <input 
                name="correo"
                className="input"
                type="text"
                onChange={updateInput}
              />
              <label for="direccion">Dirección</label>
              <input 
                name="direccion"
                className="input"
                type="text"
                required
                onChange={updateInput}
              />
             
 
            </div>
            
            <div className="column2">
            <label for="distrito">Distrito</label>
              <select className= "input"  name="distrito" onChange={updateInput} >
                <option selected="true" disabled="disabled">--Elige un distrito--</option>  
                <option value="Jose Luis Bustamante y Rivero">Jose Luis Bustamante y Rivero</option>
                <option value="Pacucarpata">Pacucarpata</option>
                <option value="Cerro Colorado">Cerro Colorado</option>
                <option value="Yanahuara">Yanahuara</option>
                <option value="Mariano Melgar">Mariano Melgar</option>
                <option value="Yura">Yura</option>
                <option value="Alto Selva Alegre">Alto Selva Alegre</option>
                <option value="Miraflores">Miraflores</option>
              </select>
              <label for="fecha">¿Cuándo necesitas el servicio?</label>
              <input  type="date"
               className="input"
               name="fecha"
               min="2020-01-01"
               max="2020-12-10" 
               onChange={updateInput}
              />
              <label for="tipo_problema">¿De qué tipo es tu problema?</label>

              <select className= "input"  name="tipo_problema" onChange={updateInput}>
                <option selected="true" disabled="disabled">--Elige una categoria--</option>  
                <option value="Gasfiteria">Gasfiteria</option>
                <option value="Pintura">Pintura</option>
                <option value="Electricidad">Electricidad</option>
                <option value="Instalaciones">Instalaciones</option>
                <option value="Carpinteria">Carpinteria</option>
                <option value="Albañileria">Albañileria</option>
              </select>
              <label for="descripcion">Descripción</label>
              <textarea className="descripcion"
                name= "descripcion"
                placeholder="Describe el problema aqui..." onChange={updateInput}>
              </textarea>
          
            </div>
          
            <div className="login__container-button">
              <Link to="/">
                <button className="button-left" type="submit"> <i className="fas fa-angle-left"></i>{ }Regresar</button>
              </Link>
              <button className="button-right" type="submit">Solicitar { } <i className="fas fa-angle-right"></i></button>          
            </div>

          </form>
        </section>
      </section>
      <Footer/>
    </>
  );
}

const mapDispatchToProps = {
  loginRequest,
};

Login.propTypes = {
  loginRequest: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Login);

import React from 'react';
import "./loginStyle.css";
import NavbarLogin from '../../components/navbar';

export default function Login() {


    return(
        <>

        <NavbarLogin/>
         <div className="container"> 

          <main className="box-login">
             <h1> Login </h1> 
             <p> Faça login para acessar a plataforma</p>

               <div>
                <label> Email ou Usuário</label>
                <input placeholder='Digite email ou usuário'/>  
               </div>

               <div> 
                   <label> Senha </label> 
                   <input type="password" placeholder='Digite sua senha'/>
                   <p> Esqueceu sua senha?</p>
               </div>
          </main> 
         </div>
        </>
    )
}
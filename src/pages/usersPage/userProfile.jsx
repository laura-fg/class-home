import React from "react";
import { useParams } from 'react-router-dom';
import  NavbarLogin from '../../components/navbar'


export default function UserProfile({users}) {
    const { id, username, name, email, turma, idade, matricula, situacao } = useParams({users});
    


    return (
      <>
      <NavbarLogin />
      <div key={id} className='container'> 
      
        <h2> Informações do Usuário {username} </h2> 

    
            <p> Nome: {name} </p>
            <p> E-mail: {email} </p>
            <p> Turma: {turma} </p>
            <p> Idade: {idade} </p>
            <p> Matricula: {matricula} </p>
            <p> Situação: {situacao} </p>
         
      </div>
      </>


    )
}
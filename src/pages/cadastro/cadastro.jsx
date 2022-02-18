import React from 'react';
import NavbarLogin from '../../components/navbar';
import {Form, Button} from 'react-bootstrap';
import './cadastro.css';

export default function Cadastro() {


    return(

       <>
       <NavbarLogin/>
             

       <Form className="form-cadastro"> 

       < h1> Ficha Cadastral </h1>
        <Form.Group className="mb-3 item-cadastro" controlId="formBasicEmail">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="Informe um email" />
        </Form.Group>

        <Form.Group className="mb-3 item-cadastro" controlId="formBasicEmail">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control type="text" placeholder="Informe o nome completo do aluno" />
        </Form.Group>

        <Form.Group className="mb-3 item-cadastro" controlId="formBasicEmail">
            <Form.Label>Idade</Form.Label>
            <Form.Control type="text" placeholder="Informe a idade do aluno" />
        </Form.Group>


        <Form.Group className="mb-3 item-cadastro" controlId="formBasicEmail">
            <Form.Label>Turma</Form.Label>
            <Form.Control type="text" placeholder="Turma" />
        </Form.Group>

  
        <Form.Group className="mb-3 item-cadastro" controlId="formBasicCheckbox">
        <Form.Label>Informe a situação da matricula</Form.Label>
            <Form.Check type="checkbox" label="Matrícula Ativa" />
            <Form.Check type="checkbox" label="Matrícula Inativa" />
        </Form.Group>
        <Button className="btn-cadastro" variant="primary" type="submit">
            Cadastrar
        </Button>
    </Form>
       </>


    )
}
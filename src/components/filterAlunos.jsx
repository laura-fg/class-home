import React from 'react';
import {Form, Button} from 'react-bootstrap';
import '../styles/filterAlunos.css';

export default function FilterAlunos() {

    return(
        <div>
         
         <Form>
            <Form.Group className="mb-3 item-form" controlId="formBasicEmail">
                <Form.Label>Turma</Form.Label>
                <Form.Control type="text" placeholder="Informe a Turma do aluno" />
            </Form.Group>

            <Form.Group className="mb-3 item-form" controlId="formBasicEmail">
                <Form.Label>Número de Matrícula do aluno</Form.Label>
                <Form.Control type="text" placeholder="Informe o número da matrícula" />
            </Form.Group>

            <Button className="btn-form" variant="primary" type="submit">
            Buscar
            </Button>
         </Form>
      </div> 
    )
}
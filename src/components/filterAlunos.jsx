import React from 'react';
import {Form, Button, Select} from 'react-bootstrap';
import '../styles/filterAlunos.css';

export default function FilterAlunos() {

    return(
        <div>
         
         <Form>
            <Form.Group className="mb-3 item-form" controlId="formBasicEmail">
                <Form.Label>Turma</Form.Label>
                <Form.Select type="text">
                <option>Selecione uma Turma</option>
                <option>T1</option>
                <option>T2</option>
                <option>T3</option>
                <option>T4</option>
                <option>T5</option>
                <option>T6</option>
                <option>T7</option>
                </Form.Select>
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
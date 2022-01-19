import { Link } from "react-router-dom";

 const users = [ 
    {id: 1, name: "Chris Evans", username: "chris", email: " chris@gmail.com", turma: "T1", matricula: 4554, idade: 15, situacao: "Ativo"},
    {id: 2, name: "Rafaele Matos", username: "rafaele", email: "rafa@outlook.com.br", turma:"T7", matricula: 4555, idade: 16, situacao: "Inativo"},
    {id: 3, name: "Lucas Anselmo", username: "lucas", email: " lucas.anselmo@gmail.com", turma: "T1", matricula: 4556, idade: 15, situacao: "Ativo"},
    {id: 4, name: "Julio Barbosa", username: "julio", email: "barbosajulio@outlook.com.br", turma:"T2", matricula: 4557, idade: 17, situacao: "Ativo"},
    {id: 5, name: "Gabriel Silveria", username: "gabriel", email: " gabriel@gmail.com", turma: "T3", matricula: 4558, idade: 15, situacao: "Ativo"},
    {id: 6, name: "Marcos Maciel", username: "marcos", email: "marcos010@outlook.com.br", turma:"T1", matricula: 4559, idade: 16, situacao: "Ativo"},
    {id: 7, name: "Luana Souza Mello", username: "luana", email: " luanamello@gmail.com", turma: "T3", matricula: 4551, idade: 15, situacao: "Ativo"},
    {id: 8, name: "Eduardo Junior ", username: "eduardo", email: "eduardo_junior@outlook.com.br", turma:"T7", matricula: 4552, idade: 17, situacao: "Ativo"},
];

export default function UserList(){

    return (
        <div>
            {users.map((user, id) => (
                <div key={user.id}>
                <Link to={`/users/${user.name}/${user.email}/${user.turma}/${user.matricula}/${user.idade}/${user.situacao}`}> {user.username} </Link>
                
                </div> 
            ))}
            
        </div> 
    )
}
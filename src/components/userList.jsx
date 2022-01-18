import { Link } from "react-router-dom";

const users = [ 
    { name: "chris", username: "Chris"},
    {name: "rafaele", username: "Rafaele"},
];

export default function UserList(){

    return (
        <div>
            {users.map((user) => (
                <Link to={`/users/${user.username}`}> {user.name} </Link>
            ))}
        </div> 
    )
}
import { useParams } from 'react-router-dom';


export default function UserProfile() {
    const { username } = useParams();


    return <div> hi there {username}</div>
}
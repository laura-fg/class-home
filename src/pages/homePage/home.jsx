import react from 'react'; 
import { Link } from 'react-router-dom';
import NavbarLogin from '../../components/navbar';
export default function Home() {

    return(
        <>
                  
             <NavbarLogin /> 
             <Link to={"/userList"}> Lista de usuários </Link> 
                
                                                                                                                                                                                                                                                                                                                                                                                                                      
     

         </>
    )
         
    
}
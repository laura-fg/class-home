import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import  UserList from './components/userList';
import  UserProfile from './pages/usersPage/userProfile';
import  Home  from './pages/homePage/home.jsx';
import Login from './pages/Login/login.jsx';
function App() {
  return (
    <BrowserRouter>
      <Switch> 
      <Route path="/" exact component={Home} /> 
      <Route path="/LOGIN" component={Login} />
      <Route path="/users/:name?/:email?/:turma?/:matricula?/:idade?/:situacao" component={UserProfile} />
      <Route path="/UserList" component={UserList}/>
     
      </Switch>
    </BrowserRouter>
  );
}

export default App;

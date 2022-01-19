import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import  UserList from './components/userList';
import  UserProfile from './pages/usersPage/userProfile';
import  Home  from './pages/homePage/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch> 
      <Route path="/" exact component={Home} /> 
      <Route path="/users/:name?/:email?/:turma?/:matricula?/:idade?/:situacao" component={UserProfile} />
      <Route path="/userList" component={UserList}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

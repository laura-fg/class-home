import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import  UserList from './components/userList';
import  UserProfile from './pages/usersPage/userProfile';
import  Home  from './pages/homePage/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Switch> 
        <Route path="/home" exact component={Home} /> 
        <Route path="/users/:username" component={UserProfile} />
        <Route path="/userList" component={UserList}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

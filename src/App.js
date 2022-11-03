
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { AddEmployeeComponent } from './components/AddEmployeeComponent';
import HeaderComponent from './components/Header';
import HomeComponent from './components/Home';
import { ListEmployeeComponent } from './components/ListEmployeeComponent';
import { UpdateEmployeeComponent } from './components/updateEmployeeComponent';

function App() {
  return (
    <div>
    <BrowserRouter>
      <HeaderComponent />
     <div className="container-fluid">
      <Switch>
        <Route path="/" exact component={HomeComponent}></Route>
        <Route path="/listemployee" component={ListEmployeeComponent}></Route>
        <Route path="/addemployee" component={AddEmployeeComponent}></Route>
        <Route path="/updateemployee/:id" component={UpdateEmployeeComponent}></Route>
      </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;

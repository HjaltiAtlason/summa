import React, {Component} from 'react';
import {
  Router,
  Route,
  Link,
  IndexLink,
  IndexRoute,
  hashHistory,
  browserHistory,
  DefaultRoute
} from 'react-router'
import UmOkkur from './pages/UmOkkur'
import Fjarfestir from './pages/Fjarfestir'
import Lantaki from './pages/Lantaki'
import YfirMenu from './pages/YfirMenu'
import './App.css';

//const Lantaki = () => <h1>Lántaka síða</h1>
const AboutUs = () => <h1>Um okkur</h1>
const EkkiFundin = () => <h1>Síðan finnst því miður ekki</h1>

function App() {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={YfirMenu}>
        <IndexRoute component={UmOkkur}/>
        <Route path='/lantaki' component={Lantaki}>
          <IndexRoute component={EkkiFundin}/>
        </Route>
        <Route path='/fjarfestir' component={Fjarfestir}>
          <IndexRoute component={EkkiFundin}/>
        </Route>
        <Route path='umokkur' component={UmOkkur}/>
        <Route path='*' component={EkkiFundin}/>
      </Route>
    </Router>
  );
};

const Nav = () => (
  <div>
    <IndexLink activeClassName='active' to='/'>Home</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/fjarfestir'>Fjárfestir</IndexLink>&nbsp;
    <IndexLink activeClassName='active' to='/umokkur'>UmOkkur</IndexLink>&nbsp;
  </div>
)
const Container = (props) => <div>
  <Nav/> {props.children}
</div>

const Fjarfestir1 = (props) => <div>
  <br/>
  <Link to="fjarfestir">fjarfestir</Link>
  <Link to="umokkur">Um Okkur</Link>
  {props.children}
</div>

export default App;

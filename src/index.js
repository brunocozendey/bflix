import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';


const Pagina404 = () => (<div> Página não encontrada </div>)

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route path="/cadastro/categoria" component={CadastroCategoria} />
    <Route path="/" component={Home} exact/>
    <Route component={ Pagina404 } />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


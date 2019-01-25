import Header from './components/Header';
import Home from './components/Home';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';

ReactDOM.render((
    <Provider>
    <Router>
        <div>
            <Header/>
            <Route exact path="/" component={ Home }/>
        </div>
    </Router>
    </Provider>
), document.getElementById('root'));

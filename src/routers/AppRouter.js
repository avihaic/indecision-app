import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Home from '../components/Home';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';


const AppRouter =  () => (
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/protfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
         <Route component={NotFoundPage} />
    </Switch>    
        </div>
    </BrowserRouter>
)

export default AppRouter;
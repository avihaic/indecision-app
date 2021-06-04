import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

const Portfolio = (props) => (
    <BrowserRouter>
        <div>
        <Items />
        <Switch>
        <Route path="/protfolio/:id" component={Portfolio} />
    </Switch>    
        </div>
    </BrowserRouter>
)

const Items= () => (
    <div>
        <p>This is from Portfolio page</p>
        <NavLink to="/protfolio/1" activeClassName="is-active" exact={true}>item1</NavLink> 
        <NavLink to="/protfolio/2" activeClassName="is-active">item2</NavLink>
    </div>
);

export default Portfolio;
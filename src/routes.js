import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Dashboard from './Components/Dashboard/Dashboard';
import BudgetWizard from './Components/BudgetWizard/BudgetWizard';

export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/budget-wizard' component={BudgetWizard}/>
    </Switch>
)
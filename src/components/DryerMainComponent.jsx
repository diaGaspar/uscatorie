import React, {Component} from 'react';
import { Route, Switch, Router } from 'react-router-dom'
import {connect} from 'react-redux';
import DryerProgram from './DryerProgramComponent';

class DryerMain extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' component={DryerProgram}/>
                    <Route path='/program/' component={DryerProgram}/>
                    <Route path='/editing/' component={DryerProgram}/>
                </Switch>
            </div>
        );
    }
}

export default connect()(DryerMain);

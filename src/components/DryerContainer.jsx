import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import {addToDo} from '../actions/dryerActions';

class DryerContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            something: 'this is a something from the state...'
        };
        this.addATodo = this.addATodo.bind(this);
    }

    addATodo() {
        console.log('the button has been pressed');
        this.props.dispatch(addToDo('added one'));
    }

    render() {
        return (
            <div className="App">
                <Button color="info" onClick={this.addATodo}>Click me to add a todo</Button>
                <div>
                    aici o sa fie niste inputuri cu data sau sa selectezi luna si tabelul cu programarile pe perioada respectiva
                </div>
                <div>
                    State: {this.state.something}
                </div>
            </div>
        );
    }
}

export default connect()(DryerContainer);

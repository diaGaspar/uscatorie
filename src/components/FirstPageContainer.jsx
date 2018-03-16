import React, {Component} from 'react';
import DryerHeaderComponent from './DryerHeaderComponent';
import DryerMain from './DryerMainComponent';

class FirstPageContainer extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Programare uscatorie</h1>
                </header>
                <DryerHeaderComponent/>
                <DryerMain/>
            </div>
        );
    }
}

export default FirstPageContainer;

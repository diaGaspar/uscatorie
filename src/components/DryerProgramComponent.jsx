import React, { Component } from 'react';
import DyerTable from './TableComponent';
import { connect } from 'react-redux';
import { getAppointments } from '../actions/dryerApointmentsActions';
import dryer from "../reducers/dryerReducer";

class DryerProgram extends Component {
    constructor(props) {
        super(props);

        console.log(123, props);

        this.state = {
            headers: [{ name: 'Nume',  filter: '', width: '20%', key: 'name' },
                { name: 'Prenume', filter: '', width: '20%', key: 'surname' },
                { name: 'Prgramat pentru usacatorie', filter: '', width: '20%', key: 'program' }],
            data: [{
                id: '1',
                name: 'Gigu',
                surname: 'Gigel',
                program: '10-10-10'
            }, {
                id: '2',
                name: 'Feis',
                surname: 'Beis',
                program: '11-11-11'
            }]
        };
    }

    render() {
        return (
            <div>
                <DyerTable headers={this.state.headers} data={this.state.data}/>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
  dryer: state.dryerAppReducer.dryer
});
export default connect(mapStateToProps)(DryerProgram);

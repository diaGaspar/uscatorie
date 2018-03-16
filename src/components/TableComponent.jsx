import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Table } from 'reactstrap';

class DryerTable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { headers, data = [] } = this.props;

        return (
           <Table>
                <thead>
                    <tr>
                        {
                            headers.map((header) => {
                                return (
                                    <td key={header.key}> {header.name} </td>
                                );
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((tableElement) => {
                            return (
                                <tr key={tableElement.id}>
                                    {
                                        headers.map((header) => {
                                           return (
                                                <td key={header.key}> {tableElement[header.key]} </td>
                                           );
                                        })
                                    }
                                </tr>
                            );
                        })

                    }
                </tbody>
            </Table>
        );
    }
}

export default connect()(DryerTable);
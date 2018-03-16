import { setAppointments } from '../actions/dryerApointmentsActions';

const initialState = {
    appointments: {
        headers: [],
        data: []
    }
};

const dryer = (state = initialState, action) => {
    switch (action.type) {
        case setAppointments:
            return Object.assign({}, state, {
                appointments: Object.assign({}, state.appointments, {
                    headers: action.data
                })
            });
        default:
            return state;
    }
}

export default dryer;

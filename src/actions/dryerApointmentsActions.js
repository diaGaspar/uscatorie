import { Axios } from 'axios';

export const getAppointments = () => {
    return Axios.get('')
        .then();
};

export const setAppointments = (appointmentData) => {
    const name = appointmentData.name;
    const surname = appointmentData.surname;

    Axios.post('', {name, surname})
        .then(getAppointments)
        .then((appointmentsData) => {

        });
};
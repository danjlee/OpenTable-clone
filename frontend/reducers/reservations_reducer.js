import { RECEIVE_RES, RECEIVE_ALL_RES, DELETE_RES } from '../actions/reservation_actions';
import { RECEIVE_RESTAURANT } from '../actions/restaurant_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const ReservationsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_RES:
            return Object.assign({}, state, { [action.reservation.id]: action.reservation });
        case RECEIVE_ALL_RES:
            return Object.assign({}, action.payload.reservations);
        case DELETE_RES:
            let nextState = Object.assign({}, state);
            delete nextState[action.reservation.id];
            return nextState;
        case RECEIVE_RESTAURANT:
            return Object.assign({}, state, action.payload.reservations);
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, action.payload.reservations);
        default:
            return state;
    }
};

export default ReservationsReducer;
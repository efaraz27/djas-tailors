import { SET_FIRST_NAME, SET_LAST_NAME, SET_ADDRESS_1, SET_ADDRESS_2, SET_CITY, SET_ZIP, SET_COUNTRY } from './AddressTypes';
const AddressReducer = (state, action) => {
    switch (action.type) {

        case SET_FIRST_NAME: {
            return {
                ...state,
                firstName: action.payload
            }
        }

        case SET_LAST_NAME: {
            return {
                ...state,
                lastName: action.payload
            }
        }

        case SET_ADDRESS_1: {
            return {
                ...state,
                address1: action.payload
            }
        }

        case SET_ADDRESS_2: {
            return {
                ...state,
                address2: action.payload
            }
        }

        case SET_CITY: {
            return {
                ...state,
                city: action.payload
            }
        }

        case SET_ZIP: {
            return {
                ...state,
                zip: action.payload
            }
        }

        case SET_COUNTRY: {
            return {
                ...state,
                country: action.payload
            }
        }

        default:
            return state
    }
}

export default AddressReducer
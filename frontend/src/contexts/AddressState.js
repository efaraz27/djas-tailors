import React, {useReducer} from 'react'
import AddressContext from './AddressContext'
import AddressReducer from './AddressReducer'
import { SET_FIRST_NAME, SET_LAST_NAME, SET_ADDRESS_1, SET_ADDRESS_2, SET_CITY, SET_ZIP, SET_COUNTRY } from './AddressTypes';

const AddressState = ({children}) => {

    const initialState = {
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        zip: '',
        country: '',
    }
    
    const [state, dispatch] = useReducer(AddressReducer, initialState)

    const setFirstName = (item) => {
        dispatch({type: SET_FIRST_NAME, payload: item})
    }

    const setLastName = (item) => {
        dispatch({type: SET_LAST_NAME, payload: item})
    }

    const setAddress1 = (item) => {
        dispatch({type: SET_ADDRESS_1, payload: item})
    }

    const setAddress2 = (item) => {
        dispatch({type: SET_ADDRESS_2, payload: item})
    }

    const setCity = (item) => {
        dispatch({type: SET_CITY, payload: item})
    }

    const setZip = (item) => {
        dispatch({type: SET_ZIP, payload: item})
    }

    const setCountry = (item) => {
        dispatch({type: SET_COUNTRY, payload: item})
    }
    
    

    return(
        <AddressContext.Provider value={{
            firstName: state.firstName,
            lastName: state.lastName,
            address1: state.address1,
            address2: state.address2,
            city: state.city,
            zip: state.zip,
            country: state.country,
            setFirstName,
            setLastName,
            setAddress1,
            setAddress2,
            setCity,
            setZip,
            setCountry
            }}>
                {children}
        </AddressContext.Provider>
    )
}

export default AddressState
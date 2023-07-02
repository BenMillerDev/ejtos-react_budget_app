import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch} = useContext(AppContext);

    const setCurrency = (value) => {

        dispatch({
            type: "CHG_CURRENCY",
            payload: value,
        })

    }

    return (
        <div className='alert alert-success'>
            <label for = "inputCurrencySelect">Currency </label>
            <select className="currency-dropdown" id="inputCurrencySelect" onChange={(event) => setCurrency(event.target.value)}>
                <option defaultValue value="$" name="$ Dollar">$ Dollar</option>
                <option value="£" name="£ Pound">£ Pound</option>
                <option value="€" name="€ Euro">€ Euro</option>
                <option value="₹" name="₹ Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;
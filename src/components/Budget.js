
import React, { useContext} from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, expenses, currency, dispatch} = useContext(AppContext);

    const budgetChanged = (value) => {
        const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
        }, 0);

        if (value > 20000) 
        {
            alert("The budget cannot exceed 20,000");
        }
        else if (budget < totalExpenses)
        {
            alert("You cannot reduce the budget value lower than the spending");
        }
        else
        {
            dispatch({
                type: "SET_BUDGET",
                payload: value,
            })

        }
    
    }
    
    return (
        <div className='alert alert-secondary'>
            <label for="budget">Budget: {currency}</label>
            <input
                required='required'
                type='number'
                id='budget'
                value={budget}
                style={{ size: 10}}
                step='10'
                max='20000'
                onChange={(event) => budgetChanged(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;
import React from 'react'

export const IncomeExpences = () => {
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>+Kshs. 0.00</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>-Kshs. 0.00</p>
            </div>
        </div>
    )
}

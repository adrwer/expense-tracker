import React from 'react'

export const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-':'+'
    const borderColor = transaction.amount < 0 ? 'minus':'plus'

    return (
        <li className={borderColor}>
            {transaction.text} <span>{sign} Kshs. {Math.abs(transaction.amount)}</span><button className='delete-btn'>X</button>
        </li>
    )
}

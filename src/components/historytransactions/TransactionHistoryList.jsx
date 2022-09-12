import PropTypes from 'prop-types';

export const TransactionHistoryList = ({ type, amount, currency }) => {
    
    return (<>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </>

    )
}


TransactionHistoryList.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
}
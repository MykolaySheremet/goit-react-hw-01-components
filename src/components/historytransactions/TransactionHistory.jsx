import PropTypes from 'prop-types';

import { TransactionHistoryList } from './TransactionHistoryList';

export const TransactionHistory = ({items}) => {

    return (<table class="transaction-history">
                <thead class="transaction-history__head">
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                        {items.map(item => (
                    <tr class="transaction-history__list" key={item.id}>
                                <TransactionHistoryList
                                    type={item.type}
                                    amount={item.amount}
                                    currency={item.currency}
                                />
                    </tr>
                        ))}
                </tbody>
            </table>
    )
                
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    }),)
}
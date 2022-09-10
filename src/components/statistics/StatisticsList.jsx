import PropTypes from 'prop-types';



export const StatisticsList = ({label, percentage }) => {

    return (
            <>
                <span class="label"> {label} </span>
                <span class="percentage">{percentage}%</span>
            </>                     
            )
}

StatisticsList.propTypes = {
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
    }
    

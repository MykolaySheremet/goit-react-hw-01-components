import PropTypes from 'prop-types';
import { StatisticsList } from './StatisticsList'

export const Statistics = ({stats, title="Upload stats"}) => {
    return (
        <section class="statistics">

            {title && <h2 class="title">{title}</h2>}
            
            <ul class="stat-list">
                {stats.map(item => (
                    
                    <li key={item.id} class="item">
                        <StatisticsList
                            label={item.label}
                            percentage={item.percentage}
                        />
                    </li>
                ))}
            </ul>
        </section>

    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
    title: PropTypes.string
}
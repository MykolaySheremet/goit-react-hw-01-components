import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';


export const FriendList = ({ friends }) => {
    return (
        <ul class="friend-list">
            {friends.map(item => (
                <li key={item.id} class="item">
                    <FriendListItem 
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    />
                </li>
            ))}
        </ul>

    )
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
}

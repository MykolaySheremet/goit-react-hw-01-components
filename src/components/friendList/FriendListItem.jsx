import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline, }) => {

    return (
        <>
            {isOnline ? <span class="status_online"></span> : <span class="status_offline"></span> }
            
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </>
    )
    
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}
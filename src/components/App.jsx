import { Profile } from "./profile/Profile";
import user from "./profile/user.json";

import { Statistics } from "./statistics/Statistics";
import data from './statistics/data.json';

import friends from './friendList/friends.json';
import { FriendList } from './friendList/FriendList';

// console.log(friends);


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >

      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location }
        avatar={user.avatar }
        stats={user.stats}
      />

      <Statistics
        stats={data}
      /> 

      <FriendList
        friends={friends}
      />

    </div>
  );
};


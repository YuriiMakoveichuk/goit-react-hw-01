import FriendListItem from "./FriendListItem";
const FriendList = ({friends, key}) => {
  return (
    <ul className="friend-list">
      {friends.map((friend) => {
        return <li key={friend.id} className="friend-item"><FriendListItem
          friends={friend}
          
        /></li>;
      })}
    </ul>
  );
};


export default FriendList;

const FriendListItem = ({friends}) => {
    return (<div className="friend-card">
        <img src={friends.avatar} alt="Avatar" width="48" />
        <p className="friend-card-title">{friends.name}</p>
        <p className="friend-card-text">{friends.isOnline === true ? <span className="friend-is-online">online</span> : <span className="friend-off-line">ofline</span>}</p>
    </div>);
}

export default FriendListItem;

const Profile = ({name, tag,location,image, stats}) => {
    return (
        <div className='profile-block'>
            <div className='profile-block-user'>
                <img className="profile-block-img"
                    src={image}
                    alt={name}
                />
                <p className="profile-block-title">{name}</p>
                <p className="profile-block-text">@{tag}</p>
                <p className="profile-block-text">{location}</p>
            </div>

            <ul className="profile-statistics-list">
                <li className="profile-statistics-item">
                    <span className="profile-statistics-text">Followers</span>
                    <span className="profile-statistics-number">{stats.followers}</span>
                </li>
                <li className="profile-statistics-item">
                    <span className="profile-statistics-text">Views</span>
                    <span className="profile-statistics-number">{stats.views}</span>
                </li>
                <li className="profile-statistics-item">
                    <span className="profile-statistics-text">Likes</span>
                    <span className="profile-statistics-number">{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
}
export default Profile;
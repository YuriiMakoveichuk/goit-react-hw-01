import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileBlock}>
      <div className={css.profileBlockUser}>
        <img className={css.profileBlockImg} src={image} alt={name} />
        <p className={css.profileBlockTitle}>{name}</p>
        <p className={css.profileBlockText}>@{tag}</p>
        <p className={css.profileBlockText}>{location}</p>
      </div>

      <ul className={css.profileStatisticsList}>
        <li className={css.profileStatisticsItem}>
          <span className={css.profileStatisticsText}>Followers</span>
          <span className={css.profileStatisticsNumber}>{stats.followers}</span>
        </li>
        <li className={css.profileStatisticsItem}>
          <span className={css.profileStatisticsText}>Views</span>
          <span className={css.profileStatisticsNumber}>{stats.views}</span>
        </li>
        <li className={css.profileStatisticsItem}>
          <span className={css.profileStatisticsText}>Likes</span>
          <span className={css.profileStatisticsNumber}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;

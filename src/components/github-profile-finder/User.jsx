
const User = ({user}) => {

    const {avatar_url, followers, following, public_repos, name, login, created_at} = user;
    const createDate = new Date(created_at)
  return (
    <div className="user">
      <div>
        <img className="avatar"src={avatar_url} alt="User" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name||login}</a>
        <p>User joined on {`${createDate.getDate()} ${createDate.toLocaleString('en-us',{
            month:'short'
        })} ${createDate.getFullYear()}`}</p>
      </div>
      <div>
        <p>Public Repos: {public_repos}</p>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>

      </div>
    </div>
  )
}

export default User

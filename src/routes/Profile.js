import { authService } from 'fbase';
import { useHistory } from 'react-router-dom';

const Profile = () => {
  const history = useHistory();
  const email = authService.currentUser.email;
  const logout = () => {
    authService.signOut();
    history.push('/');
  };

  const style = {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'red',
  };
  return (
    <>
      <span>hi {email}'s profile</span>
      <br />
      <span onClick={logout} style={style}>
        log out
      </span>
    </>
  );
};
export default Profile;

import React, { useContext } from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);

  const { users, loading } = githubContext;
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='row'>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
      </div>
    );
  }
};

Users.propsTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
// const userStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(3, 1fr)',
//   gridGap: '1rem'
// };
export default Users;

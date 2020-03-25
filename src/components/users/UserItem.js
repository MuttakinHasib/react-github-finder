import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card card-body text-center'>
      <img
        src={avatar_url}
        alt=''
        style={{ width: '100px' }}
        className='rounded d-block m-auto'
      />
      <h3 className='py-2'>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className='btn btn-dark btn-small'>
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;

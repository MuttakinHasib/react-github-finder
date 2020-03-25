import React from 'react';
import PropTypes from 'prop-types';
const RepoItem = ({ repo }) => {
  return (
    <div className='col-md-4 my-3'>
      <div className='card card-body'>
        <h5>
          <a href={repo.html_url}>{repo.name}</a>
        </h5>
      </div>
    </div>
  );
};
RepoItem.propTypes = {
  repo: PropTypes.object.isRequired
};

export default RepoItem;

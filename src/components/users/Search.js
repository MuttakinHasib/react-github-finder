import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { showAlert } = alertContext;
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      showAlert('Please enter something', 'danger');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div className='row align-items-center mb-3'>
      <div className='col-10 my-3'>
        <form onSubmit={onSubmit} className='form'>
          <div className='form-row'>
            <div className='col my-3'>
              <input
                type='text'
                className='form-control'
                placeholder='Search Here...'
                value={text}
                onChange={onChange}
              />
            </div>
            <div className='col-sm-2 my-3'>
              <input
                type='submit'
                value='Search'
                className='btn btn-secondary'
              />
            </div>
          </div>
        </form>
      </div>
      {githubContext.users.length > 0 && (
        <div className='col-sm'>
          <button className='btn btn-danger' onClick={githubContext.clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;

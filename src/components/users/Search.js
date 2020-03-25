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
      <div className='col-md-12 my-3'>
        <form onSubmit={onSubmit} className='form'>
          <div className='form-row align-items-center'>
            <div className='col-sm-6 my-1'>
              <input
                type='text'
                className='form-control w-100'
                placeholder='Search Here...'
                value={text}
                onChange={onChange}
              />
            </div>
            <div className='col-auto my-1'>
              <input
                type='submit'
                value='Search'
                className='btn btn-secondary'
              />
            </div>
          </div>
        </form>
        {githubContext.users.length > 0 && (
          <button className='btn btn-danger btn-block' onClick={githubContext.clearUsers}>
            Clear
          </button>
        )}
      </div>
    </div>
  );
};

export default Search;

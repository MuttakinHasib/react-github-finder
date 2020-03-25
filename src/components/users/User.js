import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUserRepos, repos, getUser, loading, user } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) return <Spinner />;
  return (
    <Fragment>
      <Link to='/react-github-finder' className='btn border btn-light mr-2'>
        <i className='fas fa-reply'></i>&nbsp;&nbsp; Back to search
      </Link>
      Hireable:{'  '}
      {hireable ? (
        <i className='fas fa-check text-success'></i>
      ) : (
        <i className='fas fa-times-circle text-danger'></i>
      )}
      <div className='card mt-3 card-body'>
        <div className='row'>
          <div className='col-md-5 my-3'>
            <div className='text-center'>
              <img
                src={avatar_url}
                alt=''
                className='rounded-circle'
                style={{ width: '150px' }}
              />
              <h2 className='mt-2 font-weight-bold'>{name}</h2>
              <p>Location: {location}</p>
            </div>
          </div>
          <div className='col-md-6 my-3'>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-dark my-1'>
              Visit GitHub Profile
            </a>
            <ul className='navbar-nav mt-2'>
              {login && (
                <li className='nav-item'>
                  <strong>Username: &nbsp;</strong>
                  {login}
                </li>
              )}
              {company && (
                <li className='nav-item'>
                  <strong>Company: &nbsp;</strong>
                  {company}
                </li>
              )}
              {blog && (
                <li className='nav-item'>
                  <strong>Website: &nbsp;</strong>
                  <a href={blog} rel='noopener noreferrer' target='_blank'>
                    {blog}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className='my-3 text-center'>
          <button type='button' className='btn btn-primary m-1'>
            Followers &nbsp;{' '}
            <span className='badge badge-light'>{followers}</span>
          </button>
          <button type='button' className='btn m-1 btn-success'>
            Following &nbsp;{' '}
            <span className='badge badge-light'>{following}</span>
          </button>
          <button type='button' className='btn m-1 btn-light border text-dark'>
            Public Repos &nbsp;{' '}
            <span className='badge badge-dark'>{public_repos}</span>
          </button>
          <button type='button' className='btn m-1 btn-dark'>
            Public Gists &nbsp;{' '}
            <span className='badge badge-light'>{public_gists}</span>
          </button>
        </div>
      </div>
      <div className='row mt-2'>
        <Repos repos={repos} />
      </div>
    </Fragment>
  );
};

export default User;

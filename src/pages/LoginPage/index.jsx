import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../reducers/AuthSlice';
import { useNavigate } from 'react-router-dom';
import "./style.scss";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(state => state.auth.currentUser);

  // Effect to check local storage when component mounts
  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');
    if (userFromStorage) {
      const user = JSON.parse(userFromStorage);
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'instructor') {
        navigate('/instructor/'+user.username);
      }
    }
  }, [navigate]);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === '' || password === '') {
      setError('Please enter both username and password.');
    } else {
      // Dispatch login action
      dispatch(login({ username, password }));
      if(!currentUser) {
        setError('Invalid username or password.');
      }
    }
  };

  // Redirect based on authentication status and user role
  useEffect(() => {
    setError('');
    if (currentUser) {
      // Save user data to local storage upon successful login
      localStorage.setItem('user', JSON.stringify(currentUser));
      if (currentUser.role === 'admin') {
        navigate('/admin');
      } else if (currentUser.role === 'instructor') {
        navigate('/instructor/'+currentUser.username);
      } else {
        setError('Invalid username or password.');
      }
    } 

  }, [currentUser, navigate]);

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit}>
      <table>
        <tr>
          <td>
          <label>Username:</label>
          </td>
          <td>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          </td>
        </tr>
        <tr>
          <td>
          <label>Password:</label>
          </td>
          <td>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          </td>
        </tr>
      </table>
        <div className='btn-container'>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;

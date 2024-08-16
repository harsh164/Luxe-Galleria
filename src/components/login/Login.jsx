import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useAuth } from '../../context/AuthContext'; // Import useAuth from AuthContext

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate
  const { login } = useAuth(); // Use the login function from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      console.log('Response:', result);

      if (result.success) {
        console.log('Login successful');
        setSuccess('Login successful');
        login(); // Call login function to update authentication state
        navigate('/'); // Redirect to homepage or a different page after successful login
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again.');
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #003300, #F5F5DC)',
    fontFamily: 'Arial, sans-serif',
  };

  const formStyle = {
    background: '#F5F5DC',
    padding: '30px',
    borderRadius: '10px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    width: '400px',
  };

  const titleStyle = {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#003300',
  };

  const errorMessageStyle = {
    color: 'red',
    marginBottom: '20px',
  };

  const successMessageStyle = {
    color: 'green',
    marginBottom: '20px',
  };

  const formGroupStyle = {
    marginBottom: '15px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: '#003300',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
    background: '#003300',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  };

  const buttonHoverStyle = {
    background: '#004d00',
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={titleStyle}>Login</h2>
        {error && <p style={errorMessageStyle}>{error}</p>}
        {success && <p style={successMessageStyle}>{success}</p>}
        <form onSubmit={handleSubmit}>
          <div style={formGroupStyle}>
            <label htmlFor="email" style={labelStyle}>Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <div style={formGroupStyle}>
            <label htmlFor="password" style={labelStyle}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.background = buttonHoverStyle.background}
            onMouseOut={(e) => e.target.style.background = buttonStyle.background}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

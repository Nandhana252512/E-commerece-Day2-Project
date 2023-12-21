import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication here (e.g., send credentials to a server)

    // For simplicity, just check if username and password are not empty
    if (username && password) {
      onLogin(username);
    } else {
      alert('Please enter username and password');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <label style={styles.label}>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
      </label>
      <br />
      <label style={styles.label}>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
      </label>
      <br />
      <button onClick={handleLogin} style={styles.button}>
        Login
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    borderRadius: '8px',
    marginTop: '50px',
    
  },
  heading: {
    color: '#333',
  },
  label: {
    display: 'block',
    margin: '10px 0',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
  },
  button: {
    background: '#28a745',
    color: '#fff',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Login;

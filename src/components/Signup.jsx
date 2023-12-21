import React, { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Signup</h2>
      <form>
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
        <label style={styles.label}>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        <button type="button" onClick={handleSignup} style={styles.button}>
          Signup
        </button>
      </form>
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
    background: '#007BFF',
    color: '#fff',
    padding: '10px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Signup;

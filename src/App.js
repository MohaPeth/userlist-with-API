import React from 'react';
import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <header style={{textAlign: 'center'}}>
        <h1>Utilisateurs en Ligne</h1>
      </header>

      <main>
        <UserList />
      </main>

      <footer style={{textAlign: 'center'}}>
        <p>&copy; Copyright 2024 GomyCode</p>
      </footer>
    </div>
  );
}

export default App;

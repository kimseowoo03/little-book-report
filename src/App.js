import React from 'react';
import './App.css'
import Header from './components/UI/Header';
import UsersForm from './components/UsersForm';

function App() {
  return (
    <div >
      <header>
        <Header />
      </header>
      <main>
        <UsersForm />
      </main>
    </div>
  );
}

export default App;

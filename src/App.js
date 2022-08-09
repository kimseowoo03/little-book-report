import React  from 'react';
import './App.css'
import Header from './components/UI/Header';
import UsersForm from './components/UsersForm';
import UsersReviewList from './components/UsersReviewList';

function App() {

  return (
    <div >
      <header>
        <Header />
      </header>
      <main>
        <UsersForm />
        <UsersReviewList />
      </main>
    </div>
  );
}

export default App;

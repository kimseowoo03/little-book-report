import React,{ useCallback, useEffect, useState}  from 'react';
import './App.css'
import Header from './components/UI/Header';
import UsersForm from './components/UsersForm';
import UsersReviewList from './components/UsersReviewList';

function App() {
  const [reviewValue, setReviewValue] = useState([]);
  const [error, setError] = useState(null);

  const url ="https://react-http-miniproject-default-rtdb.firebaseio.com/userReviewList.json";

  const responseReviewList = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const reviewData = [];

      for (const key in data) {
        reviewData.push({
          id: key,
          title: data[key].title,
          author: data[key].author,
          review: data[key].review,
        });
      }
      setReviewValue(reviewData);
    } catch (error) {
      const statusCode = error.response.status;
      const statusText = error.response.statusText;
      console.log(` GET ERR >> ${statusCode} / ${statusText}`);
    }
  }, []);

  useEffect(() => {
    responseReviewList();
  }, [responseReviewList]);

  const onAdd = (createReview) => {
    setReviewValue((prev) => [...prev, createReview])
  };

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <UsersForm onAdd={onAdd} />
        {error}
        <UsersReviewList reviewValue={reviewValue} />
      </main>
    </div>
  );
}

export default App;

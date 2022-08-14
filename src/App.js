import React,{ useEffect, useState}  from 'react';
import './App.css'
import Header from './components/UI/Header';
import UsersForm from './components/UsersForm';
import UsersReviewList from './components/UsersReviewList';
import useFetch from './hooks/useFetch';

function App() {
  const [reviewValue, setReviewValue] = useState([]);

  const {error, sendRequest}  = useFetch();

  useEffect(() => {
    const requestConfig = {
      url: "https://react-http-miniproject-default-rtdb.firebaseio.com/userReviewList.json",
    };
    const pushReviewList = (data) => {
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
    };
    sendRequest(requestConfig, pushReviewList);
  }, [sendRequest]);

  const onAdd = (responseDataList) => {
    setReviewValue((prev) => [...prev, responseDataList])
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

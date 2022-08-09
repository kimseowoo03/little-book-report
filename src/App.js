import React,{ useCallback, useEffect, useState}  from 'react';
import './App.css'
import Header from './components/UI/Header';
import UsersForm from './components/UsersForm';
import UsersReviewList from './components/UsersReviewList';

function App() {
  const [reviewValue, setReviewValue] = useState([]);

  const responseReviewList = useCallback(async () => {
    const response = await fetch(
      "https://react-http-miniproject-default-rtdb.firebaseio.com/userReviewList.json"
    );
    const data = await response.json();
    console.log(data);

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
  }, []);

  useEffect(() => {
    responseReviewList();
  }, [responseReviewList]);

  const onAdd = async (title, author, review) => {
     await fetch(
      "https://react-http-miniproject-default-rtdb.firebaseio.com/userReviewList.json",
      {
        method: "POST",
        body: JSON.stringify({
          title: title,
          author: author,
          review: review,
        }),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      }
    );
    await responseReviewList(); 
  };

  return (
    <div >
      <header>
        <Header />
      </header>
      <main>
        <UsersForm onAdd={onAdd} />
        <UsersReviewList reviewValue={reviewValue}/>
      </main>
    </div>
  );
}

export default App;

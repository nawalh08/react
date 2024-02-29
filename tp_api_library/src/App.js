import { useState, useEffect, useRef } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import BookList from './components/BookList';

function App() {

  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get("https://openlibrary.org/subjects/romance.json?limit=20")
      .then((response) => {
        console.log(response);
        setData(response.data.works)

      }
      )
  }, []);
  console.log(data)

  return (
    <>
    <div className="row">
    <h2 className='text-center mb-5'>La liste des livres </h2>
        {data.map((book, subjects) => <BookList key={subjects} book={book} />)
        }
     
    </div>
    </>
  );
}

export default App;

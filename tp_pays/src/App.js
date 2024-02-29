import { useState, useEffect , useRef } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import CountryList from '../src/components/CountryList'




function App() {
  const searchRef = useRef("")
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
      .then((response) => { 
        console.log(response);
        setData(response.data)
      }
      )
  }, []);

  function search() {
    if (searchRef.current.value === "") {
      axios.get("https://restcountries.com/v3.1/all")
      .then((response) => { 
        console.log(response);
        setData(response.data)
      }
      )
    } else {
      axios.get("https://restcountries.com/v3.1/name/" + searchRef.current.value)
      .then((response) => { 
        console.log(response);
        setData(response.data)
      }
      )
    }
  }
  return (
    <>
    <h1 className='text-center mb-5 mt-4'>Liste des pays </h1>
    <input type="text"
    id="inputSearch"
    aria-describedby="searchHelpBlock"
    ref={searchRef}
    onChange={search}
    placeholder='Recherche... ' className="input-group input-group-sm mb-3 " ></input>
   
    

    <div className="App row">
     
        
            {
              
              data.map((country, index) => <CountryList 
                key={index} country={country}/>) 
          }
    </div>
    </>
  )
};

export default App;

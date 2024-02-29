
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';


const BookDetails = (book) => {
  const { id } = useParams()
   const [data, setData] = useState([]);
   const [authorNames, setAuthorNames] = useState(null)


  useEffect(() => {
    axios.get(`https://openlibrary.org/works/${id}.json`)
      .then((response) => {
        console.log(response.data.covers[1]);
        setData(response.data)
        console.log(data)
      //   axios.get(`https://openlibrary.org${response.data.works.authors[0].author.key}.json`)
      // .then(response => {
      //   console.log(response.data.works);
      //   setAuthorNames(response.data.works.name)
      // })

      }
      )
  }, []);
  
  return (

    <>

<div className="card bg-dark text-light border border-light rounded m-4">
      <div className="card-header d-flex align-items-center">
        <h2>Détails du livre</h2>
      </div>
         <div className="d-flex justify-content-center">
        <img src={`https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`} alt={data?.title} className="img-fluid" />
      </div>    
      <div className="card-body">
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark text-light"><b>Titre : </b>{data?.title}</li>
           <li className="list-group-item bg-dark text-light"><b>Auteur : </b>{authorNames}</li> 
          <li className="list-group-item bg-dark text-light"><b>Date de publication : </b>{data?.first_publish_date}</li>
          <li className="list-group-item bg-dark text-light"><b>Description : </b>{data?.description}</li>
        </ul>
      </div>
    </div>
    </>
  );
}
export default BookDetails;



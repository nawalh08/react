import { Link, Outlet } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import BookDetails from './BookDetails';


const BookList = (book) => {
    console.log(`https://openlibrary.org${book.book.key}.json`);
    return (

        <>
        <div className='col-md-4 mb-4'>
        <div >
                <Card style={{  margin : "auto"  , textAlign : "center"}}  className='shadow p-3 mb-5 bg-white rounded'>
                    <Link to={`/detail${book.book.key.replace("/works" , "")}`}>
                        <Card.Img variant="top" src={`https://covers.openlibrary.org/b/id/${book.book.cover_id}-L.jpg`} className='rounded ' style= {{width: "200px", height: "350px"}}/>
                    </Link>
                    <Card.Body>
                        <Card.Title>{book.book.title}</Card.Title>
                    </Card.Body>
                </Card>
                <Outlet />
            </div>
        </div>
            
            


        </>
    );
}
export default BookList;



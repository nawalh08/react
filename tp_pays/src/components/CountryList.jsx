import Card from 'react-bootstrap/Card';
const CountryList = ({ country }) => {
    return (
        <>
      <div className='col-md-4 my-2'>
            <Card style={{ width: '400px', height: '450px', margin : "auto"  , textAlign : "center"}}  className='shadow p-3 mb-5 bg-white rounded'>
                <Card.Img variant="top" src={country.flags.png} className='rounded ' style={{ height: "250px", objectFit: "cover" }} />
                <Card.Body>
                    <Card.Title>{country.translations.fra.official}</Card.Title>
                    <Card.Text style={{ objectFit: "cover" }}>
                        <p>{`La capitale : ${country.capital}`}</p>
                        <p>{`La région : ${country.region}`}</p>
                        <p>{`la population : ${country.population}`}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
        </>
    );
}
export default CountryList;



import { Link } from 'react-router-dom';

function CountriesList({ allCountries }){

    return (

        <div>
            <p className="fs-5 py-1 text-primary">Countries List</p>
            
            {
                allCountries.map(country => {

                    return (
                        <Link to={`/country/${country.alpha3Code}`} className="d-flex p-2 text-decoration-none text-black border-bottom" key={country.alpha3Code}>
                            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt={`small-flag-${country.alpha3Code}`} width="35px"  />
                            <span className="mx-2">{country.name.common}</span> 
                        </Link>


                    )
                })

            }


        </div>
    )
};

export default CountriesList;
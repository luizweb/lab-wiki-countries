import { useParams, Link } from "react-router-dom";

import { useState } from "react";
 
import GoogleMap from "./GoogleMap";

function CountryDetails({ allCountries }){

    const {countryID} = useParams()

    const countrySelected = allCountries.find(country => country.alpha3Code === countryID);
    const borders = countrySelected.borders;
    const countriesBorders = allCountries.filter(country => borders.includes(country.alpha3Code))

    const [latlng, setLatlng] = useState("a")  
    
    console.log(latlng);

    return(

        <div>
            <p className="fs-5 py-1 text-primary">Country Detail</p>
            <div className="p-2">
                <h1>{countrySelected.name.common}</h1>
                <hr></hr>
            </div>
            
            <div className="d-flex ">
                <div className="d-flex container-fluid">

                    <table className="table">
                        <tbody>
                            <tr>
                                <th>Official name</th>
                                <td>{countrySelected.name.official}</td>
                            </tr>
                            <tr>
                                <th>Capital</th>
                                <td>{countrySelected.capital[0]}</td>
                            </tr>
                            <tr>
                                <th>Region</th>
                                <td>{countrySelected.region}</td>
                            </tr>
                            <tr>
                                <th>Subregion</th>
                                <td>{countrySelected.subregion}</td>
                            </tr>
                            <tr>
                                <th>Area</th>
                                <td>{countrySelected.area} km²</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-auto"><img src={`https://flagpedia.net/data/flags/w580/${countrySelected.alpha2Code.toLowerCase()}.png`} alt="flag" className="img-thumbnail" width="400px"/></div>
            </div>

            <p></p>

            <div className="d-flex">
                <div className="container-fluid border">
                <p>Borders</p>
                <ol>{countriesBorders.map(countryBorder => {
                    return(
                        <li key={countryBorder.alpha3Code}><Link to={`/country/${countryBorder.alpha3Code}`} className="text-decoration-none">{countryBorder.name.common}</Link></li>                    
                    )
                })}</ol>
                </div>
                <div id="map">
                    <GoogleMap latlng={countrySelected.latlng} ></GoogleMap>
                </div>
            </div>
        </div>
    )
};

export default CountryDetails;
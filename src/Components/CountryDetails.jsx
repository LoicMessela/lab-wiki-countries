import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const CountryDetails = ({ countries }) => {
    const [country, setCountry] = useState('')
    const { code } = useParams();
    useEffect(() => {
        const countryFilter = countries.filter(country => {
            return country.alpha3Code === code
        })
        console.log(countryFilter[0])
        setCountry(countryFilter[0])
    }, [code, countries])
    return (

        <div className="col-7">
            <h1>{country?.name?.common}</h1>
            <table className="table">
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td style={{ width: "30%" }}>Capital</td>
                        <td>{country?.capital}</td>
                    </tr>
                    <tr>
                        <td>Area</td>
                        <td>
                            551695 km
                            <sup>2</sup>
                        </td>
                    </tr>
                    <tr>
                        <td>Borders</td>
                        <td>
                            <ul> {country.borders?.map(border => {
                                return (<li><Link to={`/${border}`}>{border}</Link></li>)
                            })}

                            </ul>{ }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CountryDetails
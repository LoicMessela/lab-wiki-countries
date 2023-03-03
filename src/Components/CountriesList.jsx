
import { Link } from 'react-router-dom'


const CountriesList = ({ countriesDisplay }) => {
    return (

        <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }
        }>
            <div className="list-group">
                {countriesDisplay.length > 0 ?
                    countriesDisplay.map((country) => {
                        return <Link className="list-group-item list-group-item-action" to={country.alpha3Code}>{<img src={` https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} />}
                            {country.name.common}</Link>
                    })
                    : <p>...Loading</p>}
            </div>
        </div >
    )
}

export default CountriesList
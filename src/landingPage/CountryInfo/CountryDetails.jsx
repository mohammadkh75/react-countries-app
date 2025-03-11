import { useParams } from 'react-router-dom';
import { useCountries } from '../Context/CountriesContext';

export default function CountryDetails() {
    const {countryid} = useParams();
    const { countries } = useCountries();
    const country = countries.find((country) => country.cca3 === countryid);

    const [lat, lng] = country.capitalInfo.latlng || country.latlng;
    
    return (
    
        <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
            <div className='container mx-auto px-4 py-8'>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-10 gap-6 p-4'>
                    <div className='flex items-center justify-center'>
                        <img className='h-48 w-auto rounded-lg object-contain' src={country.flags.svg} alt={country.name.common} />
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <h1 className='dark:text-white text-4xl font-bold mb-6'>{country.name.common}</h1>
                        <h2 className='dark:text-white text-2xl font-semibold mb-4'>Country Information</h2>
                        <p className='dark:text-white text-xl mb-2'>Capital: {country.capital}</p>
                        <p className='dark:text-white text-xl mb-2'>Population: {new Intl.NumberFormat().format(country.population)}</p>
                        <p className='dark:text-white text-xl mb-2'>Region: {country.region}</p>
                        <p className='dark:text-white text-xl mt-2'>Languages: {country.languages[Object.keys(country.languages)[0]]}</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='dark:text-white text-2xl font-bold mb-4'>Location</h2>
                        <div className='w-full h-64 rounded-lg overflow-hidden'>
                            <iframe
                                className='w-full h-full border-0'
                                src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng-5},${lat-5},${lng+5},${lat+5}&layer=mapnik&marker=${lat},${lng}`}
                                title={`Map location of ${country.name.common}`}
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col items-center justify-center mt-10 pb-8'>
                    <h2 className='dark:text-white text-2xl font-bold mb-4'>Border Countries</h2>
                    <div className='flex flex-wrap gap-2 justify-center'>
                        {country.borders?.map((border) => (
                            <div key={border} className='bg-gray-800 text-white dark:bg-gray-200 dark:text-black px-4 py-2 rounded-md hover:scale-105 transition-transform cursor-pointer'>{border}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

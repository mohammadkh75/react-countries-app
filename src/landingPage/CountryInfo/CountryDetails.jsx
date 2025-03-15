import { useParams } from 'react-router-dom';
import { useCountries } from '../Context/CountriesContext';
import { useNavigate } from 'react-router-dom';

export default function CountryDetails() {
    const {countryid} = useParams();
    const { countries } = useCountries();
    const country = countries.find((country) => country.cca3 === countryid);
    const [lat, lng] = country.capitalInfo.latlng || country.latlng;

    const navigate = useNavigate();
    
   const handleClick = () => {
        navigate(`/`);
    
    };
    
    return (
        <div className='min-h-screen bg-gray-100 dark:bg-gray-900'>
            <div className='p-4 sm:p-6 lg:p-8'>
                <button 
                    onClick={handleClick} 
                    className='bg-gray-800 text-white dark:bg-gray-200 dark:text-black px-4 py-2 rounded-md hover:scale-105 transition-transform cursor-pointer flex items-center gap-2'
                >
                    <span>←</span> Back To Countries List
                </button>
            </div>

            <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 p-4'>
                    <div className='flex items-center justify-center p-4'>
                        <img 
                            className='w-full max-w-md h-auto object-contain rounded-lg shadow-lg' 
                            src={country.flags.svg} 
                            alt={country.name.common} 
                        />
                    </div>

                    <div className='flex flex-col space-y-4 p-4'>
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl dark:text-white font-bold">
                            {country.name.common}
                        </h1>
                        <div className='space-y-3'>
                            <h2 className='dark:text-white text-xl sm:text-2xl font-semibold'>Country Information</h2>
                            <p className='dark:text-white text-lg sm:text-xl'>Capital: {country.capital}</p>
                            <p className='dark:text-white text-lg sm:text-xl'>Population: {new Intl.NumberFormat().format(country.population)}</p>
                            <p className='dark:text-white text-lg sm:text-xl'>Region: {country.region}</p>
                            <p className='dark:text-white text-lg sm:text-xl'>Languages: {country.languages[Object.keys(country.languages)[0]]}</p>
                        </div>
                    </div>

                    <div className='flex flex-col p-4'>
                        <h2 className='dark:text-white text-xl sm:text-2xl font-bold mb-4 text-center'>Location</h2>
                        <div className='w-full h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-lg'>
                            <iframe
                                className='w-full h-full border-0'
                                src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng-5},${lat-5},${lng+5},${lat+5}&layer=mapnik&marker=${lat},${lng}`}
                                title={`Map location of ${country.name.common}`}
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className='mt-8 sm:mt-12 pb-8 px-4'>
                    <h2 className='dark:text-white text-xl sm:text-2xl font-bold mb-6 text-center'>Border Countries</h2>
                    <div className='flex flex-wrap gap-3 justify-center'>
                        {country.borders?.map((border) => (
                            <div 
                                key={border} 
                                className='bg-gray-800 text-white dark:bg-gray-200 dark:text-black px-3 py-2 sm:px-4 sm:py-2 rounded-md hover:scale-105 transition-transform cursor-pointer text-sm sm:text-base'
                            >
                                {border}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

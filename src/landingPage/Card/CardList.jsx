import CountryCard from './CountryCard';
import { useCountries } from '../Context/CountriesContext';
import useCountryStore from '../../store/Store';

const CardList = () => {
    const { countries, loading, error } = useCountries();
    const {SearchQuery}=useCountryStore(); 
    const { FilterQuery } = useCountryStore();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 dark:border-white"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
                <div className="text-center p-4">
                    <p className="text-red-600 dark:text-red-400 text-lg mb-4">{error}</p>
                    <button 
                        onClick={() => window.location.reload()}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    const filteredCountries = countries.filter((country) => 
       
   (FilterQuery ? country.region.toLowerCase().includes(FilterQuery.toLowerCase()) : true) &&
   (SearchQuery ? country.name.common.toLowerCase().includes(SearchQuery.toLowerCase()) : true)

    );
 

   

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8 bg-gray-100 dark:bg-gray-900">
            {filteredCountries.map((Country) => (
                <CountryCard
                    key={Country.cca3}
                    Country={Country}
                />
            ))}
        </div>
    );
};

export default CardList;

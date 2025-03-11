import CountryCard from './CountryCard';
import { useCountries } from '../Context/CountriesContext';

const CardList = () => {
    const { countries, loading, error } = useCountries();

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

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-8 bg-gray-100 dark:bg-gray-900">
            {countries.map((Country) => (
                <CountryCard
                    key={Country.cca3}
                    Country={Country}
                />
            ))}
        </div>
    );
};

export default CardList;

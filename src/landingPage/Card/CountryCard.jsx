import { useNavigate } from 'react-router-dom';

const CountryCard = ({Country}) => {
    const navigate = useNavigate();
    
   const handleClick = () => {
        navigate(`/country/${Country.cca3}`);
        console.log(Country);
    };

    return (
        <figure 
            onClick={handleClick} 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-800 overflow-hidden max-w-sm cursor-pointer hover:-translate-y-1"
        >
            <div className="aspect-video w-full overflow-hidden">
                <img 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    src={Country.flags.svg} 
                    alt={`Flag of ${Country.name.common}`}
                />
            </div>
            <div className="p-6 dark:text-white">
                <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">
                    {Country.name.common}
                </h2>
                <div className="space-y-2">
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Capital:</span> {Country.capital}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Population:</span> {new Intl.NumberFormat().format(Country.population)}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-semibold">Region:</span> {Country.region}
                    </p>
                </div>
            </div>
        </figure>
    );
}

export default CountryCard;
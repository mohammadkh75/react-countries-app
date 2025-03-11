import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CountriesContext = createContext();

export function CountriesProvider({ children }) {
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get('https://restcountries.com/v3.1/all', {
                    timeout: 10000,
                    headers: {
                        'Accept': 'application/json',
                    }
                });
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching countries:', error);
                setError('Failed to load countries. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchCountries();
    }, []);

    return (
        <CountriesContext.Provider value={{ countries, loading, error }}>
            {children}
        </CountriesContext.Provider>
    );
}

export function useCountries() {
    const context = useContext(CountriesContext);
   
    return context;
}


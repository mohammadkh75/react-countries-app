import useCountryStore from "../../store/Store";

export default function Header() {
    const { SearchQuery, SetSearchQuery } = useCountryStore();
    const { FilterQuery, SetFilterQuery } = useCountryStore();
    
    return (
        <div className="bg-gray-100 dark:bg-gray-900 py-4 sm:py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-between">
                    {/* Search Input */}
                    <div className="w-full sm:w-1/2 lg:w-1/3">
                        <div className="relative">
                            <input 
                                type="search" 
                                value={SearchQuery}
                                onChange={(e) => SetSearchQuery(e.target.value)}
                                placeholder="Search For Countries ..." 
                                className="w-full bg-gray-300 dark:bg-gray-700 dark:text-white 
                                    rounded-lg outline-none p-3 sm:p-4 
                                    placeholder-gray-500 dark:placeholder-gray-400
                                    focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600
                                    transition-all"
                            />
                           
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                🔍
                            </span>
                        </div>
                    </div>

                  
                    <div className="w-full sm:w-1/3 lg:w-1/4">
                        <select 
                            className="w-full bg-gray-300 dark:bg-gray-700 dark:text-white 
                                rounded-lg outline-none p-3 sm:p-4
                                focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600
                                transition-all cursor-pointer"
                            value={FilterQuery} 
                            onChange={(e) => {
                                const value = e.target.value;
                                SetFilterQuery(value === 'Filter By Region' ? '' : value);
                            }}
                        >
                            <option className="text-gray-500 dark:text-gray-400">Filter By Region</option>
                            <option className="text-gray-700 dark:text-gray-200">Europe</option>
                            <option className="text-gray-700 dark:text-gray-200">Asia</option>
                            <option className="text-gray-700 dark:text-gray-200">Africa</option>
                            <option className="text-gray-700 dark:text-gray-200">America</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}



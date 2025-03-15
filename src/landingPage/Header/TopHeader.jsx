import { ThemeContext } from "../Theme/ThemeContext"
import { useContext } from "react"
import { FaSun, FaMoon } from 'react-icons/fa'

export default function TopHeader() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const isDarkMode = theme === 'dark'

    return (
        <header className="bg-gray-100 dark:bg-gray-900 shadow-md">
            <div className="container mx-auto px-4 py-3 sm:py-4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                   
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold dark:text-white whitespace-nowrap order-1">
                        Where In The World?
                    </h1>

                  
                    <div className="flex items-center justify-center order-2">
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={isDarkMode}
                                onChange={toggleTheme}
                                className="sr-only peer"
                            />
                            <div className="w-12 sm:w-14 h-6 sm:h-7 bg-gray-300 peer-focus:outline-none 
                                rounded-full peer peer-checked:after:translate-x-full 
                                peer-checked:after:border-white after:content-[''] 
                                after:absolute after:top-[2px] after:left-[2px] 
                                after:bg-white after:rounded-full after:h-5 sm:after:h-6 
                                after:w-5 sm:after:w-6 after:transition-all 
                                peer-checked:bg-gray-600 flex items-center 
                                justify-between px-1">
                                <FaSun className="h-3 sm:h-4 w-3 sm:w-4 text-yellow-500" />
                                <FaMoon className="h-3 sm:h-4 w-3 sm:w-4 text-gray-800" />
                            </div>
                            <span className="ml-3 text-sm sm:text-base font-medium dark:text-white hidden sm:inline">
                                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </header>
    )
}
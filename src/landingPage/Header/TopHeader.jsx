import { ThemeContext } from "../Theme/ThemeContext"
import { useContext } from "react"
import { FaSun, FaMoon } from 'react-icons/fa'

export default function TopHeader() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const isDarkMode = theme === 'dark'

    return (
        <>
            <div className="grid grid-cols-3 bg-gray-100 dark:bg-gray-900">
                <div className="col-1 text-center mb-5 mt-5">
                    <h1 className="text-2xl font-bold dark:text-white">Where In The World?</h1>
                </div>

                <div className="col-1">
                </div>

                <div className="col-1 flex items-center justify-center mt-5">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input 
                            type="checkbox" 
                            checked={isDarkMode}
                            onChange={toggleTheme}
                            className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer 
                            peer-checked:after:translate-x-full peer-checked:after:border-white 
                            after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                            after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all 
                            peer-checked:bg-gray-600 flex items-center justify-between px-1">
                            <FaSun className="h-4 w-4 text-yellow-500" />
                            <FaMoon className="h-4 w-4 text-gray-800" />
                        </div>
                        <span className="ml-3 text-sm font-medium dark:text-white">
                            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                        </span>
                    </label>
                </div>
            </div>
        </>
    )
}
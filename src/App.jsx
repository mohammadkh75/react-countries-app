import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './landingPage/Header/Header'
import TopHeader from './landingPage/Header/TopHeader'
import CardList from './landingPage/Card/CardList'
import CountryDetails from './landingPage/CountryInfo/CountryDetails'
import { ThemeProvider } from './landingPage/Theme/ThemeContext'
import { CountriesProvider } from './landingPage/Context/CountriesContext'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <CountriesProvider>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
          <Routes>
            <Route path="/" element={<> <TopHeader /> <Header /><CardList /></>} />
            <Route path="/country/:countryid" element={<><TopHeader /> <CountryDetails /></>} />
          </Routes>
        </div>
        </CountriesProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App

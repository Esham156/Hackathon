import React from 'react';
import { Routes, Route } from 'react-router-dom';
import * as Pages from './pages';
import { Header } from './components';
import { AuthProvider } from "./contexts";
import { BrowserRouter } from 'react-router-dom';
import './app.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Pages.HomePage />} />
          <Route path="/superheros" element={<Pages.SuperHeroPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
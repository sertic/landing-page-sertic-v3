import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/Navbar/NavBar';
import { AssistancePage } from '../pages/AssistancePage';
import { HomePage } from '../pages/HomePage';
import { ServicesPage } from '../pages/ServicesPage';
import { WorkWithUsPage } from '../pages/WorkWithUsPage';

export const AppRouter = () => {
    const [theme, setTheme] = useState( localStorage.getItem('theme') || false);

    return (
        <div
            className={theme ? 'dark-theme' : 'light-theme'}
        >
            <BrowserRouter>
                <NavBar
                    theme={ theme }
                    setTheme={ setTheme }
                />

                <Routes>
                    <Route exact path='/home'           element={<HomePage />} />
                    <Route exact path='/assistance'     element={<AssistancePage />} />
                    <Route exact path='/services'       element={<ServicesPage />} />
                    <Route exact path='/workwithus'     element={<WorkWithUsPage theme={ theme } />} />

                    <Route path='*' element={<Navigate to='/home'/>} />
                </Routes>

                <Footer />
            </BrowserRouter>
        </div>
    )
}
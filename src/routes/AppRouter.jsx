import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/Navbar/NavBar';
import { AssistancePage } from '../pages/AssistancePage';
import { HomePage } from '../pages/HomePage';
import { ServicesPage } from '../pages/ServicesPage';
import { WorkWithUsPage } from '../pages/WorkWithUsPage';

export const AppRouter = () => {
    const [dark, setDark] = useState( localStorage.getItem('theme'));

    return (
        <BrowserRouter>
            <NavBar
                setDark={ setDark }
            />

            <Routes>
                <Route exact path='/home'               element={<HomePage />} />
                <Route exact path='/assistance'     element={<AssistancePage />} />
                <Route exact path='/services'       element={<ServicesPage />} />
                <Route exact path='/workwithus'     element={<WorkWithUsPage />} />

                <Route path='*' element={<Navigate to='/home'/>} />
            </Routes>

            <Footer />
        </BrowserRouter>
    )
}
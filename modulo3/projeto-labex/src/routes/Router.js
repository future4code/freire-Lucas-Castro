import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminHomePage } from "../pages/AdminHomePage";
import { ApplicationFormPage } from "../pages/ApplicationFormPage";
import { CreaterTripPage } from "../pages/CreaterTripPage";
import { HomePage } from "../pages/HomePage";
import { ListTripsPage } from "../pages/ListTripsPage";
import { LoginPage } from "../pages/LoginPage";
import { TripDetailsPage } from "../pages/TripDetailsPage";

export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/trips/list" element={<ListTripsPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/admin/trips" element={<TripDetailsPage />} />
                    <Route path="/admin/trips/create" element={<CreaterTripPage />} />
                    <Route path="/trips/application" element={<ApplicationFormPage />} />
                    <Route path="/admin/trips/list" element={<AdminHomePage />} />


                </Routes>



            </BrowserRouter>






        </div>
    )



}

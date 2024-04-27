import { Navigate, Route, Routes } from "react-router";
import { MainPage } from "../main/pages";
import DataPage from "../data/pages/DataPage";

export function AppRouter() {
    return ( 
        <Routes>
            <Route path="/data" element={ <DataPage /> } />
            <Route path="/*" element={ <Navigate replace to ={"/"} /> } />
            <Route path="/" element={ <MainPage /> } />
        </Routes>
     );
}
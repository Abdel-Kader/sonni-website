import {Outlet} from 'react-router-dom';
import AdminNavbar from "../components/layout/AdminNavbar";
import {useEffect, useState} from "react";
import {LoginPage} from "../pages/admin/LoginPage";

export const PrivateRoute = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    useEffect(() => {
        setIsLoggedIn(window.localStorage.getItem("user") !== null)
    }, []);
        return (
            isLoggedIn ?
            <>
                <AdminNavbar />
                <div className="ml-[270px] mt-24">
                    <Outlet/>
                </div>
            </> : <LoginPage/>
        )

};

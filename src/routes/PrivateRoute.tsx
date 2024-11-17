import {Navigate, Outlet} from 'react-router-dom';
import {useUserContext} from "../components/layout/AdminLayout";
import AdminNavbar from "../components/layout/AdminNavbar";

export const PrivateRoute = () => {

        return (
            <>
                <AdminNavbar />
                <div className="ml-[320px]">
                    <Outlet/>
                </div>
            </>
        )

};

import {Outlet} from 'react-router-dom';
import AdminNavbar from "../components/layout/AdminNavbar";

export const PrivateRoute = () => {

        return (
            <>
                <AdminNavbar />
                <div className="ml-[270px] mt-24">
                    <Outlet/>
                </div>
            </>
        )

};

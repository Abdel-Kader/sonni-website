import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import AdminNavbar from "./AdminNavbar";

export const AdminLayout = () => {
    return (
        <>
            <AdminNavbar />
            <Outlet />
            <Footer/>
        </>
    )
}

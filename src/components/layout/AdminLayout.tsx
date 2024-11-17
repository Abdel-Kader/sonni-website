import {Outlet, useOutletContext} from "react-router-dom"
import AdminNavbar from "./AdminNavbar";
import {UserType} from "../../types";
import React from "react";

type ContextType = {user : UserType | undefined}

export const AdminLayout = () => {
    const [user, setUser] = React.useState<UserType | undefined>(undefined);

    return (
        <>
            <AdminNavbar />
            <div className="ml-48">
                <Outlet context={{user} satisfies ContextType}/>
            </div>
        </>
    )
}

export function useUserContext() {
    return useOutletContext<ContextType>();
}

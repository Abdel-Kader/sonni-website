import {createContext} from "react";

type User = {
    email: string,
    firstName: string,
    lastName: string
}

export const UserContext = createContext<User | undefined>(undefined)

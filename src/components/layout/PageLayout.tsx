import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

export const PageLayout = () => {
    return (
      <>
        <Navbar />
          <Outlet />
        <Footer/>
      </>
    )
  }
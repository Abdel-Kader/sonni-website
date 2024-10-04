import React from 'react'
import Vision from '../components/home/Vision'
import homeBanner from "../assets/banners/home.jpg";
import Banner from "../components/layout/Banner";
import {presentation} from "../assets/contents/homePage";
import Equipe from "../components/home/Equipe";
import Valeurs from "../components/home/Valeurs";
import Testimonial from "../components/home/Testimonial";

export default function HomePage() {
  return (
    <>
        <Banner image={homeBanner} title={"Cabinet SONNI"} description={presentation}/>
        <Vision/>
        <Equipe/>
        <Valeurs/>
        <Testimonial/>
    </>
  )
}

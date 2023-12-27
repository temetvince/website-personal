import "./App.css";

import ProfilePicture from "../public/IMG_0081.JPG";
import Images from "./components/CarouselImages";

import React from "react";
import Header from "./components/Header";
import CardText from "./components/CardText";
import CardImg from "./components/CardImg";
import Carousel from "./components/Carousel";

export default function App() {
   const navItems = [
      {
         label: "Resume",
         path: "https://github.com/temetvince/Resume/blob/master/EmmettCaseyResume.pdf",
      },
      { label: "GitHub", path: "https://github.com/temetvince" },
      {
         label: "YouTube",
         path: "https://www.youtube.com/channel/UCw7tARIJee8gd1OpeSjAEMw",
      },
   ];

   return (
      <div className="container">
         <Header navItems={navItems} />
         <main>
            <CardImg
               className="profile-picture"
               width="13rem"
               src={ProfilePicture}
               alt="Profile Picture"
            />
            <CardText
               className="profile-text"
               title="Emmett Casey"
               subtitle="Software Professional"
               description="Midwestern born and raised, I graduated from the University of Arkansas with a BS in Computer Science and a Minor in Mathematics. I now work at Garmin leading a team of engineers. My Amateur Radio callsign is KI5SPL."
            />
         </main>
         <div>
            <Carousel className="carousel" images={Images} />
         </div>
      </div>
   );
}

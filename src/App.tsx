import "./App.css";

import ProfilePicture from "../public/IMG_0081.JPG";
import House from "../public/house.jpg";
import Jeep from "../public/jeep.jpg";
import Kayak from "../public/Kayak.jpg";
import Shack from "../public/shack.jpg";
import Cat from "../public/cat.jpg";

import React from "react";
import Header from "./components/Header/Header";
import CardText from "./components/CardText/CardText";
import CardImg from "./components/CardImg/CardImg";
import Quote from "./components/Quote/Quote";
import Card from "./components/Card/Card";

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
      <div className="app">
         <Header navItems={navItems} />
         <aside className="container">
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
         </aside>
         <main className="container cards">
            <Card
               className="main-card"
               title="My Home (in progress)"
               subtitle="Amish Cabin"
               cardImageProps={{
                  width: "100%",
                  src: `${House}`,
                  alt: "house",
               }}
            />
            <Card
               className="main-card"
               title="My Jeep"
               subtitle="Gladiator Rubicon EcoDiesel"
               cardImageProps={{
                  width: "100%",
                  src: `${Jeep}`,
                  alt: "Jeep",
               }}
            />
            <Card
               className="main-card"
               title="My Kayak"
               subtitle="Hobie Pro Angler 14 360XR"
               cardImageProps={{
                  width: "100%",
                  src: `${Kayak}`,
                  alt: "kayak",
               }}
            />
            <Card
               className="main-card"
               title="My Shack"
               subtitle="Elecraft KX3/PX3 + ALS-500, Yaesu 991a/FTM-500/5D"
               cardImageProps={{
                  width: "100%",
                  src: `${Shack}`,
                  alt: "ham radio shack",
               }}
            />
            <Card
               className="main-card"
               title="My Cat"
               subtitle="Cap (short for Captain)"
               cardImageProps={{
                  width: "100%",
                  src: `${Cat}`,
                  alt: "male cat",
               }}
            />
         </main>
         <footer className="container">
            <Quote quote="In this fleeting life, let's make the most of today and prioritize kindness in all that we do." />
         </footer>
      </div>
   );
}

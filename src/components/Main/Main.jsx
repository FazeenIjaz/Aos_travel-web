import React, { useEffect } from "react";
import "./main.css";
import img from "../../assets/img.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img8.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img6.jpg";
import img9 from "../../assets/img9.jpg";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css"; 

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epistome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "Muayna Picchu is mountain in peru, rising over Michu Picchu, the so-called Lost city of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply Spectacular.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The Halllmark of this place is"lavish" and "beauty". Always interestine in this place.',
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "According to the world tourism Ranking, 45 Milllion people visit Turkey each year, and from that about 2 Million people come to visit Cappadoccia. This place is known forr its luxurious stays and adventurous activities",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      " Guanajuato is a charming and historic state in central Mexico, known for its picturesque colonial towns, rich cultural heritage, and stunning natural landscapes",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Cinque Terre",
    location: "Italy",
    grade: "CULTURAL RELAX",
    fees: "$840",
    description:
      "Cinque Terre is a breathtakingly beautiful coastal region in northern Italy, renowned for its picturesque villages, rugged cliffs, and vibrant Mediterranean charm.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "Angkor Wat is a world-famous temple complex located in the Siem Reap province of Cambodia. It is one of the most iconic and significant archaeological sites in Southeast Asia",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Tag Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$900",
    description:
      'The Taj Mahal, often referred to as the "Crown of Palaces," is an iconic and world-renowned monument located in Agra, India. It is celebrated for its breathtaking beauty and rich historical significance.',
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$500",
    description:
      "Bali is a captivating island province of Indonesia, renowned for its stunning natural beauty, rich culture, and vibrant arts scene. ",
  },
];

const Main = () => {


  useEffect(()=>{
    Aos.init({duration:2000})
    },[])  




  return (
    <section className="main container section">
      <div className="secTitle">
        <h3  
         data-aos="fade-right" 
        className="title">Most Visited Destinations</h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div
              data-aos="fade-up" 
              key={id} className="singleDestination">
                <div className="imgDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade} <small>+1</small>{" "}
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS
                    <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;

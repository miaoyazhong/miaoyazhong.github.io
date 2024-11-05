import React, { useContext, useState } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image sources
  const images = [
    require("../../assets/images/profile.jpeg"),
    require("../../assets/images/gallary1.jpg"),
    require("../../assets/images/gallary2.jpg"),
    require("../../assets/images/gallary3.jpg"),
    require("../../assets/images/gallary4.jpg"),
    require("../../assets/images/gallary5.jpg"),
  ];

  // Function to go to the next image
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="greeting-image-div">
            <div className="image-gallery">
              <button className="gallery-button left" onClick={handlePrevious}>
                {"<"}
              </button>
              <div className="image-stack">
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className={`gallery-image ${
                      index === currentIndex
                        ? "active"
                        : index < currentIndex
                        ? "previous"
                        : "next"
                    }`}
                  />
                ))}
              </div>
              <button className="gallery-button right" onClick={handleNext}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

import React, { useState } from "react";
import "./Events.scss";
import location from "./img/header/location.svg";
import lineup1 from "./img/lineup/1.svg";
import arrows from "./img/header/arrows.svg";
import arrowRight from "./img/header/arrow-right.svg";
import logoRund from "./img/logo/rund.svg";

const Events = () => {
  const [count, setCount] = useState(0);

  return (
    <div class="header">
      <div class="header-logo">
        <img class="header-logo-image" src={logoRund} alt="" />
      </div>

      <div class="header-nav">
        <p class="header-nav-text">Upcoming Events</p>
        <img
          src={arrowRight}
          alt=""
          class="header-nav-arrow"
          id="event-right"
        />
      </div>

      <div class="event">
        <div class="event-header">
          <div class="event-date">
            <p class="event-month">APR</p>
            <p class="event-day">23</p>
          </div>

          <div class="event-hours">
            <div class="event-hours-single">
              <p>21:00</p>
              <p>Opening Doors</p>
            </div>

            <div class="event-hours-single">
              <p>22:00</p>
              <p>Comedy Show</p>
            </div>

            <div class="event-hours-single">
              <p>23:00</p>
              <p>Hip Hop Party</p>
            </div>
          </div>
        </div>

        <div class="event-background"></div>

        <div class="event-details">
          <div class="event-start">
            <div class="event-location">
              <img src={location} alt="" />
              <p>Ayoka Berlin</p>
            </div>

            <div class="event-title">
              <h1>White Chocolate</h1>
            </div>

            <div class="event-lineup">
              <div class="comedian">
                <h3 class="comedian-title">Comedian</h3>

                <div class="comedian-single">
                  <img class="comedian-image" src={lineup1} alt="" />
                  <p class="comedian-name">Samuel Sibilski</p>
                </div>

                <div class="comedian-single">
                  <img class="comedian-image" src={lineup1} alt="" />
                  <p class="comedian-name">Felix Lobrecht</p>
                </div>

                <div class="comedian-single">
                  <img class="comedian-image" src={lineup1} alt="" />
                  <p class="comedian-name">Osan Yaran</p>
                </div>

                <div class="comedian-single">
                  <img class="comedian-image" src={lineup1} alt="" />
                  <p class="comedian-name">Kevin Hart</p>
                </div>

                <div class="comedian-single">
                  <img class="comedian-image" src={lineup1} alt="" />
                  <p class="comedian-name">Marek Grund</p>
                </div>
              </div>

              <div class="deejay">
                <h3 class="deejay-title">DJ's</h3>

                <div class="deejay-single">
                  <img class="deejay-image" src={lineup1} alt="" />
                  <p class="deejay-name">Miguelinbeatz</p>
                </div>
                <div class="deejay-single">
                  <img class="deejay-image" src={lineup1} alt="" />
                  <p class="deejay-name">Stinhow</p>
                </div>
                <div class="deejay-single">
                  <img class="deejay-image" src={lineup1} alt="" />
                  <p class="deejay-name">ZeeBop</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="event-ticket">
          <button class="event-ticket-button">Ticket kaufen</button>
        </div>

        <div class="event-shadow"></div>

        <div class="event-shadow-2"></div>

        <img src={arrows} alt="" className="event-arrow" onClick={slide} />
      </div>
    </div>
  );

  function slide(e) {
    if (!count) {
      document.querySelector(".event-details").style.animation =
        "EventAnimation 1s forwards";

      document.querySelector(".event-background").style.animation =
        "FadeBack 1s forwards";

      // event_arrow_down.style.animation = "FadeBack 1s forwards";

      document.querySelector(".event-hours").style.animation =
        "FadeBack 1s forwards";

      document.querySelector(".event-shadow").style.animation =
        "FadeBack 1s forwards";

      document.querySelector(".event-shadow").style.animation =
        "FadeAway 1s forwards";

      document.querySelector(".event-arrow").style.animation =
        "EventArrow 1s forwards";

      document.querySelector(".event-shadow").style.display = "block";

      setCount(1);
    } else {
      document.querySelector(".event-details").style.animation =
        "EventAnimationBack 1s forwards";

      document.querySelector(".event-background").style.animation =
        "FadeAway 1s forwards";

      document.querySelector(".event-hours").style.animation =
        "FadeAway 1s forwards";

      document.querySelector(".event-shadow").style.animation =
        "FadeBack 1s forwards";

      document.querySelector(".event-arrow").style.animation =
        "EventArrowBack 1s forwards";

      setCount(0);
    }
  }
};

export default Events;

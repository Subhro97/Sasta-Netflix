import Logo from "../Assets/Logo";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import DesktopView from "./DesktopView";

import "./index.scss";
import { useState } from "react";

const BrowsePage = () => {
  const [viewModal, setViewModal] = useState(false);
  const mqListCards = window.matchMedia("(min-width:501px)");
  const mqListComponent = window.matchMedia("(min-width:992px)");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: mqListCards.matches ? 3.05 : 2.15,
    slidesToScroll: 1,
    swipeToSlide: true,
  };

  const headerMoreHandler = (e) => {
    setViewModal((prev) => !prev);
  };

  if (mqListComponent.matches) {
    return (
      <DesktopView />
    );
  }

  return (
    <div className="content-body">
      <div
        className={
          viewModal
            ? `${`bg-black`} ${`pinning-header`} ${`nav-box-open`}`
            : `pinning-header`
        }
      >
        <div className="pinning-header-container">
          <div className="menu-navigation">
            <div>
              <div>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/akira/fallback/hamburger.gif"
                  alt=""
                  className="header-more"
                  onClick={headerMoreHandler}
                />
                <div
                  className={viewModal ? `show-modal-bg` : `close-modal-bg`}
                ></div>
                <div className="menu-nav-box">
                  <ol className="menu-settings">
                    <li className="list-item-profile">
                      <img
                        src="https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                        alt=""
                      />
                      <p>
                        <span>Subhrojit Mondal</span>
                        <span className="switch">Switch Profiles</span>
                      </p>
                    </li>
                    {["Accounts", "Help Centre", "Sign out of Netflix"].map(
                      (item, idx) => (
                        <li className="list-items">{item}</li>
                      )
                    )}
                  </ol>
                  <ol className="menu-sections">
                    {["Home", "My List"].map((item, idx) => (
                      <li
                        className={
                          idx === 0
                            ? `${`border-select`} ${`list-items`}`
                            : `list-items`
                        }
                      >
                        {item}
                      </li>
                    ))}
                  </ol>
                  <ol className="menu-genres">
                    {[
                      "Thriller",
                      "Hindi Movies & TV",
                      "Children & Family",
                      "International Movies & TV",
                      "Malayalam-Language Movies",
                      "Action",
                      "Anime",
                      "Comidies",
                      "Fantasy",
                      "Sci-Fi",
                      "Hollywood Movies",
                      "Horror",
                      "Dramas",
                      "Documentaries",
                      "Made in India",
                      "English Films",
                    ].map((item, idx) => (
                      <li className="list-items">{item}</li>
                    ))}
                  </ol>
                </div>
              </div>
              <div className="logo-box">
                <Logo />
              </div>
            </div>

            <div>
              <form action="#" className="header-form">
                <input
                  type="text"
                  className="header-search-input"
                  placeholder="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="mainView" role="main">
        <div className="content-box">
          <div className="content-row first-row">
            <h2>Popular on Netflix</h2>
            <Slider {...settings}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
                <div className="content-item">
                  <Link to="#">
                    <div
                      style={{
                        padding: "28.125% 0",
                        background:
                          "url(https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdVugdelWK-bfNRS2bQOsg4vIKG-p2McqdMdut1cF3ODNigIO88O3bLNGWDo2W81RlLQLVaekoBFga83ububEnt5O77W26h2kX-FqgvLJEHRF3kbdtyfvKcB7D4m.jpg?r=dfc) no-repeat",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>

          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
            <div className="content-row">
              <h2>Popular on Netflix</h2>
              <Slider {...settings}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
                  <div className="content-item">
                    <Link to="#">
                      <div
                        style={{
                          padding: "28.125% 0",
                          background:
                            "url(https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdVugdelWK-bfNRS2bQOsg4vIKG-p2McqdMdut1cF3ODNigIO88O3bLNGWDo2W81RlLQLVaekoBFga83ububEnt5O77W26h2kX-FqgvLJEHRF3kbdtyfvKcB7D4m.jpg?r=dfc) no-repeat",
                          backgroundSize: "cover",
                        }}
                      ></div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-container">
        <div
          className="conatiner"
          style={{ padding: "0px 20px", color: "#999", margin: "50px 0px" }}
        >
          <ol
            style={{
              listStyle: "none",
              display: "flex",
              padding: "0",
              margin: "0",
            }}
          >
            <li>Terms of Use</li>
            <li>Privacy Statement</li>
            <li>Cookie Performance</li>
            <li>Help Centre</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BrowsePage;

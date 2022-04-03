import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Logo from "../Assets/Logo";
import Slider from "react-slick";
import { CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";
import "./DesktopView.scss";
import { signOut } from "../../store/actions/authActions";
import { push } from "connected-react-router";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <span
      className="handleNext active"
      tabIndex="0"
      role="button"
      aria-label="See more titles"
    >
      <i className="fa-solid fa-angle-right" onClick={onClick}></i>
    </span>
  );
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.3,
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 6.04,
  slidesToScroll: 1,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <></>,
};

const DesktopView = (props) => {
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [playerState, setPlayerState] = useState(false);
  const [count, setCount] = useState(0);
  const [muteIcon, setMuteIcon] = useState(false);
  const [preview, setPreview] = useState({
    preview: false,
    top: 0,
    left: 0,
  });
  const [modal, setModal] = useState(false);
  const videoRef = useRef();

  const showSearchBarHandler = () => {
    setShow((show) => !show);
  };

  console.log(props.logStatus);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      if (clicked) {
        if (entries[0].isIntersecting && !playerState && count < 1) {
          setTimeout(() => {
            entries[0].target.play();
            setPlayerState(true);
          }, 1000);
        }
      }
    }, options);
    observer.observe(videoRef.current);
  }, [playerState, count, clicked]);

  const replayHandler = () => {
    videoRef.current.play();
    setPlayerState(true);
  };

  const muteHandler = () => {
    if (!muteIcon) {
      videoRef.current.muted = true;
    } else {
      videoRef.current.muted = false;
    }
    setMuteIcon((state) => !state);
  };
  return (
    <>
      <div className="content-body" onClick={() => setClicked(true)}>
        <div className={`desk-pinning-header`}>
          <div className="desk-header-container">
            <div className="desk-menu-nav">
              <div className="primary-nav">
                <div className="logo-box">
                  <Logo />
                </div>

                <ul>
                  <li>Home</li>
                  <li>TV Shows</li>
                  <li>Movies</li>
                  <li>New & Popular</li>
                  <li>My List</li>
                </ul>
              </div>

              <div className="secondary-nav">
                <div className="nav-item nav-search">
                  <div className="search-box">
                    <i
                      className={
                        show
                          ? `${`fa-solid fa-magnifying-glass`} ${`icon-active`}`
                          : `fa-solid fa-magnifying-glass`
                      }
                      onClick={showSearchBarHandler}
                    ></i>
                    <input
                      type="text"
                      placeholder="Titles, people, genre"
                      className={
                        show ? `${`search-input`} ${`active`}` : `search-input`
                      }
                    ></input>
                  </div>
                </div>
                <div className="nav-item">
                  <span>Children</span>
                </div>
                <div className="nav-item">
                  <div className="notification">
                    <i className="fa-solid fa-bell"></i>
                    <div className="sub-menu">
                      <div className="notification-container">
                        <ul>
                          {[1, 2, 3, 4, 5].map((item, idx) => (
                            <li key={`n-${idx}`}>
                              <div className="notification">
                                <img
                                  className="title-card"
                                  src="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABRxxOHlZfOEHBO57wzd_1PRKn7vcRfGKA4xX1O71Fm0CJVEZX_-wirkPo58jKr8rOClJEmCLwZw1mIkHg87GJD0OwvXguLx_le8lrGuoIZYweUtoEvsHYn2ihWmG_uVKOrpGTYo.jpg?r=f40"
                                  srcSet="https://dnm.nflximg.net/api/v6/kvDymu0eXRyicIuSUzvRrxrm5dU/AAAABRxxOHlZfOEHBO57wzd_1PRKn7vcRfGKA4xX1O71Fm0CJVEZX_-wirkPo58jKr8rOClJEmCLwZw1mIkHg87GJD0OwvXguLx_le8lrGuoIZYweUtoEvsHYn2ihWmG_uVKOrpGTYo.jpg?r=f40 112w"
                                  alt="The Adam Project"
                                  sizes="112px"
                                />
                                <div className="notification-details">
                                  <div>New Arrival</div>
                                  <div>The Adam Project</div>
                                  <div className="age">4 days ago</div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nav-item">
                  <div className="profile-container">
                    <img
                      src="https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                      alt=""
                    />

                    <div className="profile-details">
                      <div className="profile-items">
                        <ul className="manage">
                          <li>
                            <img
                              className="profile-icon"
                              src="https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABSeeteIa0VRNjiIWgkaD5K6WolibL612PYn_dUdqFSmJjx6VfdOVh-n6WGQ4Gu3d_PXJXcyDq18qae17Q1FZOLg.png?r=5cf"
                              alt=""
                            />
                            <div className="title">Children</div>
                          </li>
                          <li>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="pen-icon"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22.2071 7.79285L15.2071 0.792847L13.7929 2.20706L20.7929 9.20706L22.2071 7.79285ZM13.2071 3.79285C12.8166 3.40232 12.1834 3.40232 11.7929 3.79285L2.29289 13.2928C2.10536 13.4804 2 13.7347 2 14V20C2 20.5522 2.44772 21 3 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071L19.2071 11.2071C19.5976 10.8165 19.5976 10.1834 19.2071 9.79285L13.2071 3.79285ZM17.0858 10.5L8.58579 19H4V14.4142L12.5 5.91417L17.0858 10.5Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="title">Manage Profile</div>
                          </li>
                        </ul>
                        <ul className="settings">
                          <li>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="pen-icon"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.00011 8C9.00011 6.34315 10.3433 5 12.0001 5C13.657 5 15.0001 6.34315 15.0001 8C15.0001 9.65685 13.657 11 12.0001 11C10.3433 11 9.00011 9.65685 9.00011 8ZM12.0001 3C9.23869 3 7.00011 5.23858 7.00011 8C7.00011 10.7614 9.23869 13 12.0001 13C14.7615 13 17.0001 10.7614 17.0001 8C17.0001 5.23858 14.7615 3 12.0001 3ZM5.98069 21.1961C6.46867 18.7563 8.61095 17 11.0991 17H12.9011C15.3893 17 17.5316 18.7563 18.0195 21.1961L19.9807 20.8039C19.3057 17.4292 16.3426 15 12.9011 15H11.0991C7.65759 15 4.69447 17.4292 4.01953 20.8039L5.98069 21.1961Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="title">Account</div>
                          </li>
                          <li>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="pen-icon"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM12 8.5C10.6831 8.5 10 9.24303 10 10H8C8 7.75697 10.0032 6.5 12 6.5C13.9968 6.5 16 7.75697 16 10C16 11.3487 14.9191 12.2679 13.8217 12.68C13.5572 12.7793 13.3322 12.9295 13.1858 13.0913C13.0452 13.2467 13 13.383 13 13.5V14H11V13.5C11 12.0649 12.1677 11.1647 13.1186 10.8076C13.8476 10.5339 14 10.1482 14 10C14 9.24303 13.3169 8.5 12 8.5ZM13.5 16.5C13.5 17.3284 12.8284 18 12 18C11.1716 18 10.5 17.3284 10.5 16.5C10.5 15.6716 11.1716 15 12 15C12.8284 15 13.5 15.6716 13.5 16.5Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                            <div className="title">Help Centre</div>
                          </li>
                        </ul>
                        <ul className="signout">
                          <li>
                            <div
                              className="title"
                              onClick={() => props.logout()}
                            >
                              Sign out of Netflix
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mainView" role="main">
          <div className="billboard-row">
            <div className="billboard-motion">
              <div className="motion-background-component">
                <div className="hero-image-wrapper">
                  <video
                    ref={videoRef}
                    className={
                      playerState
                        ? `${`video-overlay-player`} ${`visible`}`
                        : `video-overlay-player`
                    }
                    muted={false}
                    preload="true"
                    onEnded={() => {
                      setPlayerState(false);
                      setCount((count) => ++count);
                    }}
                    src="https://s3-dub-2.cf.trailer.row.aiv-cdn.net/4a4d/f1f3/9cf9/48ce-b981-6b5181be69ad/5362993b-927a-4080-bafb-682845be2483_video_900_audio_aaclc_128.mp4?Expires=1647630647&amp;Signature=jVqOgBSyKeMarKdgJ6fdb8kf-AHPoRjaE5LxiT44OjZrf6gCt6WqTprMbfcpfzjgxw8adcsK5trMkuC1CFE2U5DJLVm76lkisFw6JtkiIVGyTWbhMiIbACQPN7AvY9i1GuStFDUVlLKX7YSmXQlC2sGZx0-ZaQ3cww~KWAgOuDSEnngN0ENZ65NYAjgL0rl1Ir1mVg91xRb774JC~mIM69PjV6WTHzsznbZ3j6A6GrTmFdDsXgMYIigRx~sCAZyKZHZA1vcbhtGFjUexJ0bEJuwyiegnccgP-3noGL3qv5qZg2mWsSUm5I5wAYCMDT7CqHSuptdbHtH1MhNhSPhjLg__&amp;Key-Pair-Id=APKAJIYEUF5P2E3CCYTA"
                  ></video>
                  <img
                    className="hero"
                    src="https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbdLeSlQIgrogA_AD-r2wZw5HCh9nReMaWwcBTe-2d2zLseJCaESxByZR-OCp-9CNJCzwflhUaRNrZbpjyV8wXZrQkvA.webp?r=de5"
                    alt=""
                  />
                  <div className="trailer-vingette"></div>
                  <div className="hero-vingette"></div>
                </div>
                <div className="embedded-components">
                  <div className="action-btn">
                    <button type="button">
                      <div className="icon">
                        {playerState ? (
                          !muteIcon ? (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="svg-icon"
                              onClick={muteHandler}
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M24 12C24 8.28699 22.525 4.72603 19.8995 2.10052L18.4853 3.51474C20.7357 5.76517 22 8.81742 22 12C22 15.1826 20.7357 18.2349 18.4853 20.4853L19.8995 21.8995C22.525 19.274 24 15.7131 24 12ZM11 4.00001C11 3.59555 10.7564 3.23092 10.3827 3.07613C10.009 2.92135 9.57889 3.00691 9.29289 3.29291L4.58579 8.00001H1C0.447715 8.00001 0 8.44773 0 9.00001V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00001ZM5.70711 9.70712L9 6.41423V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70712ZM16.0001 12C16.0001 10.4087 15.368 8.8826 14.2428 7.75739L12.8285 9.1716C13.5787 9.92174 14.0001 10.9392 14.0001 12C14.0001 13.0609 13.5787 14.0783 12.8285 14.8285L14.2428 16.2427C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92896C18.9462 6.80432 19.9998 9.34786 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87829 17.157 7.84346 15.6567 6.34317L17.0709 4.92896Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          ) : (
                            <svg
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="Hawkins-Icon Hawkins-Icon-Standard"
                              onClick={muteHandler}
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          )
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                            className="svg-icon"
                            onClick={replayHandler}
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.1747 3.07702C11.01 2.79202 8.81537 3.30372 6.99988 4.51679C5.18439 5.72987 3.8718 7.56158 3.30668 9.67065C2.74155 11.7797 2.96243 14.0223 3.92815 15.9806C4.89388 17.9389 6.53859 19.4794 8.55586 20.3149C10.5731 21.1505 12.8254 21.2242 14.893 20.5224C16.9606 19.8205 18.7025 18.391 19.7942 16.5L18.0622 15.5C17.2131 16.9708 15.8582 18.0826 14.2501 18.6285C12.642 19.1744 10.8902 19.1171 9.32123 18.4672C7.75224 17.8173 6.47302 16.6192 5.7219 15.096C4.97078 13.5729 4.79899 11.8287 5.23853 10.1883C5.67807 8.5479 6.69897 7.12324 8.11102 6.17973C9.52307 5.23623 11.23 4.83824 12.9137 5.05991C14.5974 5.28158 16.1432 6.10778 17.2629 7.3846C18.1815 8.43203 18.762 9.7241 18.9409 11.0921L17.5547 10.168L16.4453 11.8321L19.4453 13.8321C19.7812 14.056 20.2188 14.056 20.5547 13.8321L23.5547 11.8321L22.4453 10.168L20.9605 11.1578C20.784 9.27909 20.0201 7.49532 18.7666 6.06591C17.3269 4.42429 15.3395 3.36202 13.1747 3.07702Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        )}
                      </div>
                    </button>
                  </div>
                  <div className="ratings">
                    <span>13+</span>
                  </div>
                </div>
              </div>
              <div className="fill-container">
                <div className="info-layer">
                  <div className="logo-and-text">
                    <div
                      className="titleWrapper"
                      style={
                        playerState
                          ? { transform: "translate3d(0, 90px, 0)" }
                          : {}
                      }
                    >
                      <img
                        alt="Superstore"
                        className={
                          playerState
                            ? `${`resize`} ${`title-logo `}`
                            : `title-logo`
                        }
                        src="https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABTMuXAPRcLHWdKPcKcBdhOJHXJBYOQ0UAQChh2BtM6p3JoI5p5IGP5W75TtS4SYBTKKfbhyJ--VNUBJidYI95pJnMNaAgayLr27k.webp?r=cfc"
                        title="Superstore"
                      />
                    </div>
                    <div
                      className={
                        playerState
                          ? `${`info-wrapper`} ${`hide`}`
                          : `info-wrapper`
                      }
                    >
                      <div className={`synopsis`}>
                        At a big-box megastore in St. Louis, a group of
                        employees with larger-than-life personalities put up
                        with customers, day-to-day duties and each other.
                      </div>
                    </div>
                    <div className="billboard-links">
                      <div className="buttons">
                        <div>
                          <button className="play-btn">
                            <div className="play">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <div style={{ width: "0.65rem" }}></div>
                            <span>Play</span>
                          </button>
                        </div>
                        <div>
                          <button className="info-btn">
                            <div className="info">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                                  fill="currentColor"
                                ></path>
                              </svg>
                            </div>
                            <div style={{ width: "0.65rem" }}></div>
                            <span>More Info</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {[
            "Popular on Netflix",
            "Trending Now",
            "Triller Movies",
            "New Releases",
            "English Movies",
          ].map((item, idx) => {
            return (
              <div key={`t-${idx}`} className="content-row">
                <div
                  style={{
                    display: "flex",
                    marginBottom: "0.5rem",
                    paddingLeft: "4%",
                  }}
                >
                  <h2>{item}</h2>
                  <span className="header-support">
                    <span
                      style={{
                        marginLeft: "0.3rem",
                        color: "#fff",
                        fontSize: "1vw",
                        display: "flex",
                        alignItems: "flex-end",
                      }}
                    >
                      Explore All
                    </span>
                    <i
                      className="fa-solid fa-angle-right"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        color: "#fff",
                        marginLeft: "0.3rem",
                      }}
                    ></i>
                  </span>
                </div>
                <Slider {...settings}>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
                    <div key={`i-${idx}`} className="content-item">
                      <Link to="#">
                        <div
                          className="item"
                          style={{
                            padding: "28.125% 0",
                            background:
                              "url(https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUeU6d3qFQ3K8pbNbDw-zGHc6PSnayZ6ctW-FU4rcASJxpR942WeTgaILCAFnhlDB1Wpq0uFzlMnPnYKo9xh8OoX3UQ.webp?r=0ed) no-repeat",
                            backgroundSize: "cover",
                            borderRadius: "0.2vw",
                          }}
                          onMouseEnter={(e) => {
                            let viewportOffset =
                              e.target.getBoundingClientRect();
                            setPreview({
                              preview: true,
                              top: viewportOffset.top + window.pageYOffset,
                              left: viewportOffset.left,
                            });
                          }}
                        ></div>
                      </Link>
                    </div>
                  ))}
                </Slider>
              </div>
            );
          })}
        </div>

        <div className="footer-container">
          <div className="social-links">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon svg-icon-facebook-logo"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.9868 13.1621V21.9841H10.0418V13.1621H6.8418V9.51207H10.0468V6.73207C10.0468 3.56707 11.9318 1.82007 14.8148 1.82007C15.7616 1.83321 16.7061 1.91577 17.6408 2.06707V5.17307H16.0448C15.4952 5.10007 14.9422 5.28088 14.5419 5.66447C14.1415 6.04807 13.9373 6.59284 13.9868 7.14507V9.51207H17.4868L16.9278 13.1621H13.9868Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon svg-icon-instagram-logo"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.9302 16.1229C21.9586 17.6764 21.3791 19.1796 20.3152 20.3119C19.1853 21.3804 17.68 21.9606 16.1252 21.9269C14.4742 22.0209 9.52524 22.0209 7.87524 21.9269C6.32151 21.955 4.81816 21.3756 3.68524 20.3119C2.61778 19.1818 2.03769 17.6772 2.07024 16.1229C1.97724 14.4719 1.97724 9.52294 2.07024 7.87294C2.03979 6.3188 2.61957 4.8146 3.68524 3.68294C4.81792 2.61946 6.32187 2.04157 7.87524 2.07294C9.52624 1.97894 14.4752 1.97894 16.1252 2.07294C17.6791 2.04388 19.1828 2.62347 20.3152 3.68794C21.3827 4.81807 21.9628 6.32272 21.9302 7.87694C22.0232 9.52794 22.0232 14.4719 21.9302 16.1229ZM20.2002 11.9999C20.2002 10.5449 20.3202 7.42194 19.8002 6.10594C19.4575 5.23672 18.7695 4.54869 17.9002 4.20594C16.5882 3.68894 13.4612 3.80594 12.0062 3.80594C10.5512 3.80594 7.42824 3.68494 6.11224 4.20594C5.24322 4.54899 4.55529 5.23693 4.21224 6.10594C3.69524 7.41794 3.81224 10.5449 3.81224 11.9999C3.81224 13.4549 3.69124 16.5779 4.21224 17.8939C4.5556 18.7628 5.24343 19.4506 6.11224 19.7939C7.42424 20.3109 10.5522 20.1939 12.0062 20.1939C13.4602 20.1939 16.5842 20.3149 17.9002 19.7939C18.7693 19.4509 19.4572 18.763 19.8002 17.8939C20.3192 16.5819 20.2002 13.4549 20.2002 11.9999ZM17.1302 11.9999C17.1302 14.8311 14.8354 17.1264 12.0042 17.1269C9.17307 17.1275 6.87734 14.8331 6.87624 12.0019C6.87513 9.17077 9.16907 6.8746 12.0002 6.87293C13.361 6.87028 14.6668 7.40953 15.6292 8.37155C16.5916 9.33356 17.1314 10.6392 17.1292 11.9999H17.1302ZM15.3362 11.9999C15.3362 10.1596 13.8446 8.66749 12.0042 8.66694C10.1639 8.66639 8.67134 10.1576 8.67024 11.9979C8.66914 13.8383 10.1599 15.3313 12.0002 15.3329C13.8409 15.3318 15.333 13.8406 15.3352 11.9999H15.3362ZM17.3362 7.85895C16.6735 7.85895 16.1362 7.32168 16.1362 6.65894C16.1362 5.9962 16.6735 5.45894 17.3362 5.45894C17.999 5.45894 18.5363 5.9962 18.5363 6.65894C18.5381 6.97725 18.4127 7.28311 18.1879 7.50847C17.9631 7.73383 17.6576 7.86001 17.3392 7.85895H17.3362Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon svg-icon-twitter-logo"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.7679 8.20699C20.7912 11.5932 19.4564 14.8475 17.0619 17.242C14.6674 19.6365 11.4131 20.9713 8.02688 20.948C5.58911 20.9544 3.2014 20.2564 1.15088 18.938C1.50985 18.9771 1.87079 18.9955 2.23188 18.993C4.24756 18.9984 6.20627 18.3245 7.79188 17.08C5.87426 17.0472 4.18959 15.799 3.59988 13.974C3.8797 14.0187 4.16251 14.0421 4.44588 14.044C4.84342 14.0428 5.23922 13.9914 5.62388 13.891C3.53625 13.4666 2.03658 11.6303 2.03788 9.49999V9.44099C2.65823 9.78763 3.35178 9.98261 4.06188 10.01C2.08967 8.6933 1.48213 6.06953 2.67488 4.01999C4.9496 6.82015 8.30584 8.52335 11.9089 8.70599C11.8373 8.36899 11.8008 8.0255 11.7999 7.68099C11.8012 5.84293 12.9247 4.19202 14.634 3.51624C16.3433 2.84045 18.292 3.27679 19.5499 4.61699C20.552 4.4234 21.513 4.0573 22.3899 3.53499C22.0555 4.56892 21.3554 5.44537 20.4209 5.99999C21.3101 5.89964 22.1793 5.66707 22.9999 5.30999C22.3865 6.20227 21.6272 6.98488 20.7539 7.62499C20.7679 7.81999 20.7679 8.01399 20.7679 8.20699Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>

            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="svg-icon svg-icon-youtube-logo"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.5401 6.67C22.2881 5.71873 21.5491 4.97331 20.6001 4.713C18.8801 4.25 12.0001 4.25 12.0001 4.25C12.0001 4.25 5.12009 4.25 3.40009 4.713C2.45106 4.97331 1.71211 5.71873 1.46009 6.67C1.14277 8.42869 0.988785 10.213 1.00009 12C0.988785 13.787 1.14277 15.5713 1.46009 17.33C1.71301 18.2825 2.45414 19.0282 3.40509 19.287C5.12009 19.75 12.0051 19.75 12.0051 19.75C12.0051 19.75 18.8851 19.75 20.6001 19.287C21.5491 19.0267 22.2881 18.2813 22.5401 17.33C22.8574 15.5713 23.0114 13.787 23.0001 12C23.0114 10.213 22.8574 8.42869 22.5401 6.67ZM9.75009 15.27V8.729L15.5001 12L9.75009 15.27Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <ul className="footer-link">
            {[
              "Audi & Subtitles",
              "Audio Description",
              "Help Centre",
              "Gift Cards",
              "Media Centre",
              "Investor Relations",
              "Jobs",
              "Terms of Use",
              "Privacy",
              "Legal Notices",
              "Cookie Preferences",
              "Corporate Information",
              "Contact Us",
            ].map((item, idx) => (
              <li key={`ft-${idx}`} className="footer-link-wrapper">
                {item}
              </li>
            ))}
          </ul>

          <div className="footer-service">
            <button className="service-code">Service Code</button>
          </div>

          <div className="footer-copyright">
            <span>© 1997-2022 Netflix, Inc.</span>
            <span className="footer-copyright-instance">
              {`{092aa564-cf79-401c-94bf-918cdec54f77}`}
            </span>
          </div>
        </div>
      </div>

      <CSSTransition
        in={preview.preview}
        mountOnEnter
        unmountOnExit
        timeout={100}
        classNames="preview"
      >
        <div
          className="previewModal"
          style={{
            position: "absolute",
            top: `${preview.top}px`,
            left: `${preview.left}px`,
          }}
          onMouseLeave={() =>
            setPreview({
              preview: false,
              top: preview.top,
              left: preview.left,
            })
          }
        >
          <div>
            <img
              className="previewModal--boxart"
              src="https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUeU6d3qFQ3K8pbNbDw-zGHc6PSnayZ6ctW-FU4rcASJxpR942WeTgaILCAFnhlDB1Wpq0uFzlMnPnYKo9xh8OoX3UQ.webp?r=0ed"
              alt="Spider-Man: Far from Home"
              style={{ width: "100%", borderRadius: "4px" }}
            />
          </div>
          <div className="mini-modal">
            <div className="item-btns">
              <div className="item">
                <button className="generic-btn btn-1">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Hawkins-Icon Hawkins-Icon-Standard"
                      style={{
                        width: "auto",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <path
                        d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>

              <div className="item">
                <button className="generic-btn btn-2">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Hawkins-Icon Hawkins-Icon-Standard"
                      style={{
                        width: "auto",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>

              <div className="item">
                <button className="generic-btn btn-3">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Hawkins-Icon Hawkins-Icon-Standard"
                      style={{
                        width: "auto",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>

              <div
                className="item item-4"
                onClick={(e) => {
                  document.body.style.overflow = "hidden";
                  setModal(true);
                }}
              >
                <button className="generic-btn btn-4">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Hawkins-Icon Hawkins-Icon-Standard"
                      style={{
                        width: "auto",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>

            <div className="previewModal-info">
              <div className="info">
                <span className="match">84% Match</span>
                <span className="maturity">18+</span>
                <span className="duration">2h 45m</span>
              </div>
            </div>

            <div className="previewModal-tags">
              <div className="evidence-tags">
                <div className="evidence-item">
                  <div className="evidence-text">Sci-fi</div>
                </div>
                <div className="evidence-item">
                  <div className="evidence-seperator"></div>
                  <div className="evidence-text">Western</div>
                </div>
                <div className="evidence-item">
                  <div className="evidence-seperator"></div>
                  <div className="evidence-text">Drama</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={modal}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <div
          className="modal-overlay"
          onClick={() => {
            document.body.style.overflow = "overlay";
            setModal(false);
          }}
        ></div>
      </CSSTransition>
      <CSSTransition
        in={modal}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modals"
      >
        <div className="modal-container">
          <div>
            <img
              className="previewModal--boxart"
              src="https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUeU6d3qFQ3K8pbNbDw-zGHc6PSnayZ6ctW-FU4rcASJxpR942WeTgaILCAFnhlDB1Wpq0uFzlMnPnYKo9xh8OoX3UQ.webp?r=0ed"
              aria-hidden="true"
              alt="Spider-Man: Far from Home"
            />
          </div>
          <div
            className="previewModal-close"
            onClick={() => {
              document.body.style.overflow = "overlay";
              setModal(false);
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="Hawkins-Icon Hawkins-Icon-Standard"
              role="button"
              tabindex="0"
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "#181818",
                borderRadius: "50%",
                outline: "none",
                padding: "8px",
              }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>

          <div className="modal-titleLayer">
            <div className="modal-btns">
              <div style={{ marginTop: "0.3rem" }}>
                <button className="play-btn">
                  <div className="play">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div style={{ width: "0.65rem" }}></div>
                  <span>Play</span>
                </button>
              </div>
              <div className="item">
                <button className="generic-btn btn-2">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Hawkins-Icon Hawkins-Icon-Standard"
                      style={{
                        width: "auto",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>

              <div className="item">
                <button className="generic-btn btn-3">
                  <div>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="Hawkins-Icon Hawkins-Icon-Standard"
                      style={{
                        width: "auto",
                        height: "100%",
                        overflow: "hidden",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="modal-info">
            <div className="total-modal">
              <div className="detail-modal">
                <div className="ptrack">
                  <div className="modal-info">
                    <div className="info">
                      <span className="match">84% Match</span>
                      <span className="year">2019</span>
                      <span className="maturity">13+</span>
                      <span className="duration">2h 45m</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-more">
                <h3 className="heading-more">More Like This</h3>
                <div className="more-items">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => (
                    <div key={`mi-${idx}`} className="item">
                      <div className="image-wrapper">
                        <img
                          src="https://occ-0-2686-3647.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQnByd4XplrrFoJdD-4t_w8stRO3ggfbVgU76ttf5YVKpQ2bIJb1Tp5Jg-vL3h2mfgV2Anp38wV4JrbMEoEgMhcYp4c.webp?r=a1f"
                          alt="The Amazing Spider-Man 2"
                        />
                        <div className="titleCard-playIcon">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="titleCard-playSVG"
                          >
                            <path
                              d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                        <span className="duration">2h 21m</span>
                      </div>

                      <div className="metadata-wrapper">
                        <div className="video-Metadata">
                          <div className="two-lines">
                            <div className="first-line">
                              <span className="match">71% Match</span>
                            </div>
                            <div className="second-line">
                              <span className="maturity">13+</span>
                              <span className="year">2014</span>
                            </div>
                          </div>
                          <div className="item-box">
                            <button className="generic-btn btn-2">
                              <div>
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="Hawkins-Icon Hawkins-Icon-Standard"
                                  style={{
                                    width: "auto",
                                    height: "100%",
                                    overflow: "hidden",
                                  }}
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </div>
                            </button>
                          </div>
                        </div>
                        <p>
                          Spider-Man squares off against the Rhino and the
                          powerful Electro while struggling to keep his promise
                          to leave Gwen Stacy out of his dangerous life.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-wrapper">
                <h3>
                  About <strong>Spider-Man: Far From Home</strong>
                </h3>

                <div className="about-container">
                  <div className="previewModal-tags">
                    <span className="previewModal-tags-label">
                      Director: &nbsp;
                    </span>
                    <span className="tag-item">Jon Watts</span>
                  </div>
                  <div className="previewModal-tags">
                    <span className="previewModal-tags-label">
                      Cast: &nbsp;
                    </span>
                    {[
                      "Tom Holland",
                      "Zendaya",
                      "Samuel L. Jackson",
                      "Jake Gyllenhaal",
                      "Jon Favreau",
                      "Jacob Batalon",
                    ].map((item, idx) => (
                      <span key={`act-${idx}`} className="tag-item">
                        {item + ","}&nbsp;
                      </span>
                    ))}
                    <span className="tag-item">Marisa Tomei</span>
                  </div>

                  <div className="previewModal-tags">
                    <span className="previewModal-tags-label">
                      Writer: &nbsp;
                    </span>
                    <span className="tag-item">Chris Mckenna, &nbsp;</span>
                    <span className="tag-item">Erik Sommers</span>
                  </div>

                  <div className="previewModal-tags">
                    <span className="previewModal-tags-label">
                      Genres: &nbsp;
                    </span>
                    <span className="tag-item">Sci-Fi Movies, &nbsp;</span>
                    <span className="tag-item">US Movies, &nbsp;</span>
                    <span className="tag-item">Action & Adventure</span>
                  </div>

                  <div className="previewModal-tags">
                    <span className="previewModal-tags-label">
                      This movie is: &nbsp;
                    </span>
                    <span className="tag-item">Suspenseful, &nbsp;</span>
                    <span className="tag-item">Exiciting</span>
                  </div>
                  <div className="previewModal-tags">
                    <span className="previewModal-tags-label">
                      This movie is: &nbsp;
                    </span>
                    <span className="tag-item">Suspenseful, &nbsp;</span>
                    <span className="tag-item">Exiciting</span>
                  </div>
                  <div className="previewModal-tags">
                    <span className="previewModal-tags-label">
                      Maturity Rating: &nbsp;
                    </span>
                    <span className="tag-item-maturity">13+</span>
                    <span className="tag-item">
                      Recommended for ages 13 and up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    logStatus: state.auth.logStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      localStorage.removeItem("logStatus")
      dispatch(signOut());
      dispatch(push("/in"));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesktopView);

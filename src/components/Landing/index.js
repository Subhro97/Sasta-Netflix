import { Link } from "react-router-dom";

import "./index.scss";
import "./index2.scss";
import Logo from "../Assets/Logo";
import Footer from "../Generic/Footer";

const HeroCard = () => {
  return (
    <section id="hero-card">
      <div className="container d-flex hero-card-logo">
        <span>
          <Logo />
        </span>
        <div className="lang-box">
          <i className="fas fa-globe"></i>
          <select className="select-lang-box" name="lang">
            <option value="English">English</option>
            <option value="हिन्दी">हिन्दी</option>
          </select>
        </div>
        <Link to="/in/login">Sign In</Link>
      </div>

      <div className="container hero-card-text">
        <div>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form
            action="#"
            className="hero-form d-flex justify-content-center flex-wrap"
            noValidate
          >
            <div className="form-input">
              <input
                className="email-input"
                type="email"
                placeholder="Email address"
                minLength="5"
                maxLength="50"
              />
              <label className="email-label">Email address</label>
            </div>
            <button className="form-btn" type="submit">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const WatchTV = () => {
  return (
    <section id="watchTV-card">
      <div className="watchTV-container">
        <div className="watchTV-heading">
          <h1>Enjoy on your TV.</h1>
          <h2>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </h2>
        </div>
        <div className="watchTV-video">
          <div className="watchTV-img">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
            />
            <div className="watchTV-playback">
              <video
                preload="true"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                type="video/mp4"
                autoPlay
                muted
                loop
              ></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Download = () => {
  return (
    <section id="download-card">
      <div className="download-container">
        <div className="download-header">
          <h1>Download your shows to watch offline.</h1>
          <h2>
            Save your favourites easily and always have something to watch.
          </h2>
        </div>
        <div className="download-animation">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
            alt=""
          />
          <div className="animation-container">
            <div className="animation-img">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                alt=""
              />
            </div>
            <div className="animation-txt">
              <div className="text-1">Stranger Things</div>
              <div className="text-2">Downloading...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Everywhere = () => {
  return (
    <section id="watch-every-card">
      <div className="watch-every-container">
        <div className="watch-every-header">
          <h1>Watch everywhere.</h1>
          <h2>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </h2>
        </div>
        <div className="watch-every-playback">
          <img
            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            alt=""
          />
          <div className="watch-every-video">
            <video
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
              type="video/mp4"
              autoPlay
              muted
              loop
              playsInline
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

const Children = () => {
  return (
    <section id="children-card">
      <div className="children-container">
        <div className="children-header">
          <h1>Create profiles for children.</h1>
          <h2>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </h2>
        </div>
        <div className="children-img">
          <img
            src="https://occ-0-2686-3646.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

const Accordian = () => {
  return (
    <section id="netflix-faq-card">
      <div className="netflix-faq-container">
        <div className="netflix-faq-header">
          <p>Frequently Asked Questions</p>
        </div>

        <div className="accordion" id="netflix-faq">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                What is Netflix?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="netflix-faq"
            >
              <div className="accordion-body">
                <span id="" data-uia="">
                  Netflix is a streaming service that offers a wide variety of
                  award-winning TV shows, movies, anime, documentaries and more
                  – on thousands of internet-connected devices.<br></br>
                  <br></br>You can watch as much as you want, whenever you want,
                  without a single ad – all for one low monthly price. There's
                  always something new to discover, and new TV shows and movies
                  are added every week!
                </span>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How much does Netflix cost?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="netflix-faq"
            >
              <div className="accordion-body">
                <span id="" data-uia="">
                  Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                  streaming device, all for one fixed monthly fee. Plans range
                  from ₹&nbsp;149 to ₹&nbsp;649 a month. No extra costs, no
                  contracts.
                </span>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Where can I watch?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="netflix-faq"
            >
              <div className="accordion-body">
                <span id="" data-uia="">
                  Watch anywhere, anytime. Sign in with your Netflix account to
                  watch instantly on the web at netflix.com from your personal
                  computer or on any internet-connected device that offers the
                  Netflix app, including smart TVs, smartphones, tablets,
                  streaming media players and game consoles.<br></br> <br></br>
                  You can also download your favourite shows with the iOS,
                  Android, or Windows 10 app. Use downloads to watch while
                  you're on the go and without an internet connection. Take
                  Netflix with you anywhere.
                </span>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How can I cancel Netflix?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="netflix-faq"
            >
              <div className="accordion-body">
                <span id="" data-uia="">
                  Netflix is flexible. There are no annoying contracts and no
                  commitments. You can easily cancel your account online in two
                  clicks. There are no cancellation fees - start or stop your
                  account anytime.
                </span>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                What can I watch on Netflix?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="netflix-faq"
            >
              <div className="accordion-body">
                <span id="" data-uia="">
                  Netflix has an extensive library of feature films,
                  documentaries, TV shows, anime, award-winning Netflix
                  originals, and more. Watch as much as you want, anytime you
                  want.
                </span>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                Is Netflix good for kids?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="netflix-faq"
            >
              <div className="accordion-body">
                <span id="" data-uia="">
                  The Netflix Kids experience is included in your membership to
                  give parents control while kids enjoy family-friendly TV shows
                  and films in their own space.<br></br>
                  <br></br>Kids profiles come with PIN-protected parental
                  controls that let you restrict the maturity rating of content
                  kids can watch and block specific titles you don’t want kids
                  to see.
                </span>
              </div>
            </div>
          </div>
        </div>

        <form
          action="#"
          className="hero-form d-flex justify-content-center flex-wrap"
          noValidate
        >
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <div className="form-input">
            <input
              className="email-input"
              type="email"
              placeholder="Email address"
              minLength="5"
              maxLength="50"
            />
            <label className="email-label">Email address</label>
          </div>
          <button className="form-btn" type="submit">
            Get Started
          </button>
        </form>
      </div>
    </section>
  );
};

const LandingPage = ({}) => {
  return (
    <>
      <HeroCard />
      <WatchTV />
      <Download />
      <Everywhere />
      <Children />
      <Accordian />
      <Footer />
    </>
  );
};

export default LandingPage;

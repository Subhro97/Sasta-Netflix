import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { auth } from "../../agent";

import "./index.scss";
import Logo from "../Assets/Logo";
import { push } from "connected-react-router";
import { signIn } from "../../store/actions/authActions";

class SignupPage extends React.Component {
  constructor(props) {
    super(props);

    this.emailRef = React.createRef();
    this.passRef = React.createRef();
  }
  onSubmitHandler(event) {
    event.preventDefault();
    let email = this.emailRef.current.value;
    let password = this.passRef.current.value;

    auth
      .signin(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBeR8jolXL7xWMePIi6vslwPJfoAI2Jx7Q",
        email,
        password
      )
      .then((data) => {
        localStorage.setItem("logStatus", true);
        this.props.navigate();
      });
  }

  render() {
    return (
      <div className="sign-up-container">
        <div className="sign-up-bg">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/1c62fa7f-27da-453c-bcfc-4ffb726de69c/IN-en-20220214-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/1c62fa7f-27da-453c-bcfc-4ffb726de69c/IN-en-20220214-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/1c62fa7f-27da-453c-bcfc-4ffb726de69c/IN-en-20220214-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/ed0b5df9-ba9d-4534-bd09-57993daeda56/1c62fa7f-27da-453c-bcfc-4ffb726de69c/IN-en-20220214-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w"
            alt=""
          />
        </div>

        <div className="netflix-logo">
          <Link to="/Sasta-Netflix/in/">
            <Logo />
          </Link>
        </div>

        <div class="login-body-outer">
          <div className="login-body">
            <h1>Sign In</h1>

            <div className="form-details">
              <form onSubmit={this.onSubmitHandler.bind(this)}>
                <div className="details-box">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    id="email"
                    ref={this.emailRef}
                  />
                  <label id="email" className="email-label">
                    Email or phone number
                  </label>
                </div>
                <div className="details-box">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    id="password"
                    ref={this.passRef}
                  />
                  <label htmlFor="password" className="pass-label">
                    Password
                  </label>
                </div>
                <button>Sign In</button>

                <div className="other-box">
                  <div className="check-box">
                    <input type="checkbox" id="checkbox" checked readOnly />
                    <label htmlFor="checkbox">
                      <span>Remember me</span>
                    </label>
                  </div>
                  <div className="help-box">
                    <Link to="#">Need Help?</Link>
                  </div>
                </div>
              </form>
            </div>

            <div className="other-form">
              <div className="fb-form">
                <form action="" className="fb-login">
                  <button>
                    <div className="fb-box">
                      <img
                        src="https://assets.nflxext.com/ffe/siteui/login/images/FB-f-Logo__blue_57.png"
                        alt=""
                      />
                      <span>Login with facebook</span>
                    </div>
                  </button>
                </form>
              </div>

              <div className="signup-box">
                <span>New to Netflix?</span>
                <Link to="#">Sign up now.</Link>
              </div>

              <div className="learn-box">
                <p>
                  <span>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.
                  </span>
                  &nbsp;
                  <Link to="#">Learn More</Link>
                </p>

                <div>
                  <span>
                    The information collected by Google reCAPTCHA is subject to
                    the Google{" "}
                    <Link
                      to="https://policies.google.com/privacy"
                      target="_blank"
                    >
                      Privacy Policy
                    </Link>{" "}
                    and{" "}
                    <Link to="https://policies.google.com/terms" target="_blank">
                      Terms of Service
                    </Link>
                    , and is used for providing, maintaining, and improving the
                    reCAPTCHA service and for general security purposes (it is not
                    used for personalised advertising by Google).
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="signin-footer">
          <div className="footer-divider"></div>
          <div className="footer-body">
            <div className="footer-contact">
              <p>
                Questions? Call
                <Link to="tel:000-800-040-1843 ">000-800-040-1843 </Link>
              </p>
            </div>
            <div className="footer-sections">
              <ul>
                <li>
                  <Link to="https://help.netflix.com/support/412" data-uid="0">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="https://help.netflix.com" data-uid="1">
                    Help Centre
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://help.netflix.com/legal/termsofuse"
                    data-uid="7"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://help.netflix.com/legal/privacy"
                    data-uid="8"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link to="#" data-uid="9">
                    Cookie Preferences
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://help.netflix.com/legal/corpinfo"
                    data-uid="10"
                  >
                    Corporate Information
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-lang">
              <div className="lang-btn">
                <i className="fas fa-globe"></i>
                <select name="languages">
                  <option value="English">English</option>
                  <option value="हिन्दी">हिन्दी</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: () => {
      dispatch(signIn());
      dispatch(push("/Sasta-Netflix/browse"));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignupPage);

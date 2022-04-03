import "./Footer.scss";

const Footer = () => {
  const arr = [
    { name: "FAQ", link: "https://help.netflix.com/support/412" },
    { name: "Help Centre", link: "https://help.netflix.com" },
    { name: "Account", link: "/youraccount" },
    { name: "Media Centre", link: "https://media.netflix.com/" },
    { name: "Investor Relations", link: "http://ir.netflix.com/" },
    { name: "Jobs", link: "https://jobs.netflix.com/jobs" },
    { name: "Ways to Watch", link: "/watch" },
    { name: "Terms of Use", link: "https://help.netflix.com/legal/termsofuse" },
    { name: "Privacy", link: "https://help.netflix.com/legal/privacy" },
    { name: "Cookie Preferences", link: "#" },
    {
      name: "Corporate Information",
      link: "https://help.netflix.com/legal/corpinfo",
    },
    { name: "Contact Us", link: "#" },
    { name: "Speed Test", link: "#" },
    { name: "Legal Notices", link: "#" },
    { name: "Only on Netflix", link: "#" },
  ];
  return (
    <section id="footer-card">
      <div className="footer-container">
        <div className="footer-contact">
          <p>
            Questions? Call
            <a href="tel:000-800-040-1843 ">000-800-040-1843 </a>
          </p>
        </div>
        <div className="footer-sections">
          <ul>
            {arr.map((item, idx) => {
              return (
                <li key={`f-${idx}`}>
                  <a href={item.link} data-uid={`${idx}`}>
                    {item.name}
                  </a>
                </li>
              );
            })}
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
        <div className="footer-name">
          <p>Netflix India</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;

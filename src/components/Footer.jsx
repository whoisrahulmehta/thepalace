import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <div className="fbox">
          <h1 style={{ color: "gold" }}>Palais De L'amour</h1>
          <p>
            Established over two decades ago, Palais De L'amour has become a
            symbol of culinary excellence and romantic ambiance.
          </p>
          <div className="social">
            {[
              { icon: <FaFacebook /> },
              { icon: <FaInstagram /> },
              { icon: <FaWhatsapp /> },
              { icon: <FaTwitter /> },
              { icon: <FaGithub /> },
              { icon: <FaLinkedin /> },
            ].map((a, i) => (
              <a href="" key={i}>{a.icon}</a>
            ))}
          </div>
        </div>
        <div className="fbox">
          <h1>About</h1>
          {[
            { name: "History", link: "" },
            { name: "Forum", link: "" },
            { name: "Timetable", link: "" },
            { name: "Our Foods", link: "" },
            { name: "Privacy Policies", link: "" },
          ].map((a, i) => (
            <a href="" key={i}>{a.name}</a>
          ))}
        </div>
        <div className="fbox">
          <h1>Services</h1>
          {[
            { name: "How To Book", link: "" },
            { name: "Our Chef", link: "" },
            { name: "Delivery", link: "" },
            { name: "Payments", link: "" },
          ].map((a, i) => (
            <a href="" key={i}>{a.name}</a>
          ))}
        </div>
        <div className="fbox">
          <h1>Others</h1>
          {[
            { name: "Contact Us", link: "" },
            { name: "Help", link: "" },
            { name: "Privary", link: "" },
          ].map((a, i) => (
            <a href=""  key={i}>{a.name}</a>
          ))}
        </div>
      </footer>
      <div className="end">
        <p>© 2024 Virgin Atlantic Airways Ltd. All rights reserved.</p>
        <p>
          Registered office: The VHQ, Fleming Way, Crawley, West Sussex RH10 9DF
        </p>
        <p>
          Cookie statement | Terms and conditions | Privacy policy |
          Accessibility | Canadian tariffs | Israeli Law and Regulations | Air
          Carrier Access Act | Modern Slavery statement
        </p>
        <p>Bookings made by credit card or debit card no longer incur a fee.</p>
        <p>cards</p>
        <p> {[
              { icon: <FaFacebook /> },
              { icon: <FaInstagram /> },
              { icon: <FaWhatsapp /> },
              { icon: <FaTwitter /> },
              { icon: <FaGithub /> },
              { icon: <FaLinkedin /> },
            ].map((a, i) => (
              < a href="" key={i}>  <span >{a.icon}</span></a>
            ))}</p>
        <p className="muted">Powered By - RAHUL MEHTA</p>
      </div>
    </>
  );
}

export default Footer;

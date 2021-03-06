import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-upper-container">
          <div className="footer-upper">
            <div className="footer-about">
              <ul>
                <p className="footer-upper-heading">About</p>

                <li className="footer-list-color"> Damilola</li>
                <li className="footer-list-color"> Damilola</li>
                <li className="footer-list-color"> Damilola</li>
              </ul>
            </div>

            <div className="footer-shop">
              <ul>
                <p className="footer-upper-heading">Shop</p>

                <li className="footer-list-color"> Damilola</li>
                <li className="footer-list-color"> Damilola</li>
                <li className="footer-list-color"> Damilola</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="copyright">
          <p>All Right Reserved.</p>
          <ul>
  <li className="footer-list-color">&copy; D.O {new Date().getFullYear()}</li>
            <li className="footer-list-color">Built By: Damilola Oyeyipo</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

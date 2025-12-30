import React from "react";
import "./Foot.css";

const Foot = () => {
  return (
    <footer className="footer">
      {/* Top Section - Legal/Informational Text */}
      <div className="footer-legal">
        <div className="footer-legal-content">
          <p>
            <strong>1.</strong> Trade-in values will vary based on the
            condition, year, and configuration of your eligible trade-in device.
            Not all devices are eligible for credit. You must be at least 18
            years old to be eligible to trade in for credit or for an Apple Gift
            Card. Trade-in value may be applied toward qualifying new device
            purchase, or added to an Apple Gift Card. Actual value awarded is
            based on receipt of a qualifying device matching the description
            provided when estimate was made. Sales tax may be assessed on full
            value of a new device purchase. In-store trade-in requires
            presentation of a valid photo ID (local law may require saving this
            information). Offer may not be available in all stores, and may vary
            between in-store and online trade-in. Some stores may have additional
            requirements. Apple or its trade-in partners reserve the right to
            refuse or limit quantity of any trade-in transaction for any reason.
            More details are available from Apple's trade-in partner for
            trade-in and recycling of eligible devices. Restrictions and
            limitations may apply.
          </p>
          <p>
            To access and use all Apple Card features and products available
            only to Apple Card users, you must add Apple Card to Wallet on an
            iPhone or iPad with the latest version of iOS or iPadOS. Update to
            the latest version by going to Settings &gt; General &gt; Software
            Update. Tap Download and Install.
          </p>
          <p>
            Available for qualifying applicants in the United States.
          </p>
          <p>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
          </p>
          <p>
            Learn more about how Apple Card applications are evaluated at{" "}
            <a href="https://support.apple.com/kb/HT209218">
              support.apple.com/kb/HT209218
            </a>
            .
          </p>
          <p>
            A subscription is required for Apple Arcade, Apple Fitness+, Apple
            Music, and Apple TV+.
          </p>
          <p>
            Features are subject to change. Some features, applications, and
            services may not be available in all regions or all languages.
          </p>
        </div>
      </div>

      {/* Middle Section - Footer Links */}
      <div className="footer-links">
        <div className="footer-links-container">
          {/* Column 1: Shop and Learn */}
          <div className="footer-column">
            <h3 className="footer-column-title">Shop and Learn</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#">Store</a>
              </li>
              <li>
                <a href="#">Mac</a>
              </li>
              <li>
                <a href="#">iPad</a>
              </li>
              <li>
                <a href="#">iPhone</a>
              </li>
              <li>
                <a href="#">Watch</a>
              </li>
              <li>
                <a href="#">Vision</a>
              </li>
              <li>
                <a href="#">AirPods</a>
              </li>
              <li>
                <a href="#">TV & Home</a>
              </li>
              <li>
                <a href="#">AirTag</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Gift Cards</a>
              </li>
            </ul>

            <h3 className="footer-column-title">Apple Wallet</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#">Wallet</a>
              </li>
              <li>
                <a href="#">Apple Card</a>
              </li>
              <li>
                <a href="#">Apple Pay</a>
              </li>
              <li>
                <a href="#">Apple Cash</a>
              </li>
            </ul>
          </div>

          {/* Column 2: Account & Entertainment */}
          <div className="footer-column">
            <h3 className="footer-column-title">Account</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#">Manage Your Apple Account</a>
              </li>
              <li>
                <a href="#">Apple Store Account</a>
              </li>
              <li>
                <a href="#">iCloud.com</a>
              </li>
            </ul>

            <h3 className="footer-column-title">Entertainment</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#">Apple One</a>
              </li>
              <li>
                <a href="#">Apple TV+</a>
              </li>
              <li>
                <a href="#">Apple Music</a>
              </li>
              <li>
                <a href="#">Apple Arcade</a>
              </li>
              <li>
                <a href="#">Apple Fitness+</a>
              </li>
              <li>
                <a href="#">Apple News+</a>
              </li>
              <li>
                <a href="#">Apple Podcasts</a>
              </li>
              <li>
                <a href="#">Apple Books</a>
              </li>
              <li>
                <a href="#">App Store</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Apple Store */}
          <div className="footer-column">
            <h3 className="footer-column-title">Apple Store</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#">Find a Store</a>
              </li>
              <li>
                <a href="#">Genius Bar</a>
              </li>
              <li>
                <a href="#">Today at Apple</a>
              </li>
              <li>
                <a href="#">Group Reservations</a>
              </li>
              <li>
                <a href="#">Apple Camp</a>
              </li>
              <li>
                <a href="#">Apple Store App</a>
              </li>
              <li>
                <a href="#">Certified Refurbished</a>
              </li>
              <li>
                <a href="#">Apple Trade In</a>
              </li>
              <li>
                <a href="#">Financing</a>
              </li>
              <li>
                <a href="#">Carrier Deals at Apple</a>
              </li>
              <li>
                <a href="#">Order Status</a>
              </li>
              <li>
                <a href="#">Shopping Help</a>
              </li>
            </ul>
          </div>

          {/* Column 4: For Business, Education, Healthcare, Government */}
          <div className="footer-column">
            <h3 className="footer-column-title">For Business</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#">Apple and Business</a>
              </li>
              <li>
                <a href="#">Shop for Business</a>
              </li>
            </ul>

            <h3 className="footer-column-title">For Education</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#">Apple and Education</a>
              </li>
              <li>
                <a href="#">Shop for K-12</a>
              </li>
              <li>
                <a href="#">Shop for College</a>
              </li>
            </ul>

            <h3 className="footer-column-title">For Healthcare</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#">Apple and Healthcare</a>
              </li>
            </ul>

            <h3 className="footer-column-title">For Government</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#">Apple and Government</a>
              </li>
              <li>
                <a href="#">Shop for Veterans and Military</a>
              </li>
              <li>
                <a href="#">Shop for State and Local Employees</a>
              </li>
              <li>
                <a href="#">Shop for Federal Employees</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Apple Values & About Apple */}
          <div className="footer-column">
            <h3 className="footer-column-title">Apple Values</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#">Accessibility</a>
              </li>
              <li>
                <a href="#">Education</a>
              </li>
              <li>
                <a href="#">Environment</a>
              </li>
              <li>
                <a href="#">Inclusion and Diversity</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Racial Equity and Justice</a>
              </li>
              <li>
                <a href="#">Supply Chain Innovation</a>
              </li>
            </ul>

            <h3 className="footer-column-title">About Apple</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#">Newsroom</a>
              </li>
              <li>
                <a href="#">Apple Leadership</a>
              </li>
              <li>
                <a href="#">Career Opportunities</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Ethics & Compliance</a>
              </li>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Contact Apple</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-shop-info">
            More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
            <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE
            (1-800-692-7753).
          </p>

          <div className="footer-bottom-links">
            <div className="footer-copyright">
              <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
            </div>

            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <span> | </span>
              <a href="#">Terms of Use</a>
              <span> | </span>
              <a href="#">Sales and Refunds</a>
              <span> | </span>
              <a href="#">Legal</a>
              <span> | </span>
              <a href="#">Site Map</a>
            </div>

            <div className="footer-country">
              <span>United States</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Foot;

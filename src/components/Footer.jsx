import React from 'react';

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer_title">
            <p>text footer p</p>
          </div>
          <div className="footer_hrefs">
            <a href="#">
              href contact1
              <img src="" alt="img1" />
            </a>
            <a href="#">
              href contact2
              <img src="" alt="img2" />
            </a>
            <a href="#">
              href contact3
              <img src="" alt="img3" />
            </a>

            <div className="mail_tel">
              <span className="mail">kwawfa@mgail.com</span>
              <div className="tel">+79623232671</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import React from "react";
import { Image } from "react-bootstrap";
import { FaTwitter, FaDiscord, FaTelegramPlane, FaBlog } from "react-icons/fa";
import { HiMenuAlt2 } from "react-icons/hi";
import banner from '../assets/images/white-menue.png';
import logo from '../assets/images/Logo.png';
// import { useNavigate } from "react-router";
import {Link} from "react-router-dom"
export default function () {
  // const navigate=useNavigate();
  return (
    <header className="page-header">
      <div className="container h-100">
        <div className="heaer-wrapper h-100">
          <input type="checkbox" name="" id="so" className="d-none so" />
          <div className="wrapper-menu-logo">
          <label htmlFor="so" className="lable">
          <Image src={banner} alt="Humb" className="humb-icon tab-show"/>
          </label>
          <div className="logo-frame">
            <Image src={logo} className="desk-logo" alt="logo"/>
            Romi.Finance
          </div>
          </div>
        
            <ul className="nave-list mb-0">
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/dashboard`}>Dashboard</Link>
              </li>
              <li>
                <a href="#">NFT</a>
              </li>
              <li>
                <a href="#">Earn</a>
              </li>
              <li>
                <a href="#">Buy</a>
              </li>
              <li>
                <a href="#">Referrals</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
         
          <ul className="icon-list mb-0 desk-show">
              <li>
                <button className="primary-btn">Trade</button>
              </li>
              <li>
                <button className="gost-btn fx-14 fw-normal">
                  <Image
                    src="https://zomi.finance/static/media/ic_wallet_24.a19a6758.svg"
                    className=""
                    alt="image"
                  />{" "}
                  Connect{" "}
                </button>
              </li>
              <li>
              <button className="gost-btn fx-14 fw-normal">
                <Image
                  src="https://zomi.finance/static/media/ic_eth_24.6b1d8a1d.svg"
                  alt="text"
                />
              </button>
              </li>
            </ul>
        </div>
      </div>
      {/* <p className="fs-20-16 fw-semibold">Header start</p> */}
    </header>
  );
}

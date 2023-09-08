import React from "react";
import "./signIn.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <div>
        <a className="link link-hover text-white">
          Questions? Call 000-800-919-1694{" "}
        </a>
        <span className="container-first">
          {" "}
          <a className="link link-hover text-white">FAQ</a>
          <a className="link link-hover text-white">Help Centre</a>
          <a className="link link-hover text-white">Terms of Use</a>
          <a className="link link-hover text-white">Privacy</a>{" "}
        </span>
      </div>

      <span className="container-second">
        <a className="link link-hover text-white">Cookie Preferences</a>
        <a className="link link-hover text-white">Corporat Information</a>
      </span>
    </footer>
  );
}

export default Footer;

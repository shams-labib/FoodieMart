import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer md:flex md:justify-around md:items-center sm:footer-horizontal bg-base-300 text-base-content p-10">
      <nav>
        <img className="w-15 h-15 rounded-full" src={logo} alt="" />
        <span className="lg:text-2xl text-sm font-bold bg-gradient-to-r from-amber-500 to-orange-600  hover:from-amber-600 hover:to-orange-700 bg-clip-text text-transparent">
          FoodieMart
        </span>
      </nav>
      <nav className="flex flex-col gap-4 text-left md:text-left">
        <p className="font-medium  text-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
          At FoodieMart, we bring the world <br /> of flavors to your doorstep.
          Discover premium ingredients, authentic tastes, <br /> and a culinary
          journey like no other.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-start items-start">
          <Link to={"https://foodibd.com/about-us"} className="link link-hover">
            About us
          </Link>
          <Link
            to={"https://foodibd.com/contact-us"}
            className="link link-hover"
          >
            Contact
          </Link>
          <Link to={"/allreveiws"} className="link link-hover">
            Upcoming Food
          </Link>
          <a className="link link-hover">More info</a>
        </div>
      </nav>

      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a className="cursor-pointer">
            <FaXTwitter size={22} />
          </a>
          <a className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

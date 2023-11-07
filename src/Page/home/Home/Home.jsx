import { TypeAnimation } from "react-type-animation";
import img1 from "../../../photo/343617328_1317960939123788_1840975766021119825_n-removebg-preview.png";
import {  FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left"
        src={img1}
        alt=""
      />
      <div className="w-full h-screen absolute top-0  left-0 bg-white/50">
        <h1>I'm Rohan IsLam</h1>
        <h2>
          <TypeAnimation
            sequence={[
              "I'm a MERN-Stack Developer",
              1000,
              "Coder",
              1000,
              "Enthusiast",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "2em",
              paddingLeft: "5px",
              display: "inline-block",
            }}
            cursor={true}
            repeat={Infinity}
          />
        </h2>
        <div>
            <FaFacebook></FaFacebook>
            <FaInstagram></FaInstagram>
            <FaLinkedinIn></FaLinkedinIn>
        </div>
      </div>
    </div>
  );
};

export default Home;

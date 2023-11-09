import { TypeAnimation } from "react-type-animation";
import img1 from "../../../photo/343617328_1317960939123788_1840975766021119825_n-removebg-preview.png";
import {  FaFacebook, FaInstagram, FaLinkedinIn, } from "react-icons/fa";
import MyService from "../../../Components/SideNav/MyService/MyService";
import Projects from "../../../Components/Projects/Projects";
import Contact from "../../../Components/Contact/Contact";

const Home = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-right scale-x-[1]"
        src={img1}
        alt=""
      />
      <div className="w-full h-screen absolute top-0  left-0 bg-white/50">
       <div className="max-w-[700px] h-auto m-auto h-full w-full flex flex-col justify-center lg:items-start items-center ">
       <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 ">I'm Rohan IsLam</h1>
        <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a 
          <TypeAnimation
            sequence={[
              "MERN-Stack Developer",
              2000,
              "Coder",
              2000,
              "Tech Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              fontSize: "1em",
              paddingLeft: "5px",
              display: "inline-block",
            }}
            cursor={true}
            repeat={Infinity}
          />
        </h2>
        <div className="flex justify-between pt-5 max-w-[200px] w-full">
            <FaFacebook   className="cursor-pointer" size={20}></FaFacebook>
            <FaInstagram  className="cursor-pointer" size={20}></FaInstagram>
            <FaLinkedinIn className="cursor-pointer" size={20}></FaLinkedinIn>
        </div>
       </div>
      </div>
      <Projects></Projects>
      <MyService></MyService>
      <Contact></Contact>
    </div>
  );
};

export default Home;

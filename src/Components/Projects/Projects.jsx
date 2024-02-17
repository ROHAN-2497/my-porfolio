// import ProjectItems from "./ProjectItems";
// import pic1 from "../../photo/Projectrs/12bf18171705527.Y3JvcCwxMDIyLDc5OSwxODksMzAx.webp";
// import pic2 from "../../photo/Projectrs/a19a8f166833825.Y3JvcCwxNDA2LDExMDAsMjU3LDA.webp";
// import pic3 from "../../photo/Projectrs/a5bfd2181887113.Y3JvcCw4MDgsNjMyLDAsMA.webp";
// import pic4 from "../../photo/Projectrs/f88ad6165557627.Y3JvcCw1NzI3LDQ0ODAsMTQsMA.webp";

const Projects = () => {
  return (
    <div id="projects" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
       My Projects
      </h1>
      <p className="text-center py-8">
      Hello There! I'm, Md. Rohan isLam Not only I'm a Diploma Engineer , But also I'm a MERN Stack Developer । Web developing is my passion. That's why i explore with Full Stack development Technology
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-12 ">
        {/* <ProjectItems img={pic1} title='1st projects'></ProjectItems>
        <ProjectItems img={pic2} title="second projects"></ProjectItems>
        <ProjectItems img={pic3} title="third projects"></ProjectItems>
        <ProjectItems img={pic4} title="four projects"></ProjectItems> */}
      </div>
    </div>
  );
};

export default Projects;

import ProjectItems from "./ProjectItems";
import pic1 from "../../photo/Projectrs/12bf18171705527.Y3JvcCwxMDIyLDc5OSwxODksMzAx.webp";
import pic2 from "../../photo/Projectrs/a19a8f166833825.Y3JvcCwxNDA2LDExMDAsMjU3LDA.webp";
import pic3 from "../../photo/Projectrs/a5bfd2181887113.Y3JvcCw4MDgsNjMyLDAsMA.webp";
import pic4 from "../../photo/Projectrs/f88ad6165557627.Y3JvcCw1NzI3LDQ0ODAsMTQsMA.webp";

const Projects = () => {
  return (
    <div id="projects" className="max-w[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ad nam
        dignissimos consequuntur modi dolorum eius labore ea quis blanditiis?
      </p>
      <div className="grid sm:grid-cols-2 gap-12 ">
        <ProjectItems img={pic1} title='1st projects'></ProjectItems>
        <ProjectItems img={pic2} title="second projects"></ProjectItems>
        <ProjectItems img={pic3} title="third projects"></ProjectItems>
        <ProjectItems img={pic4} title="four projects"></ProjectItems>
      </div>
    </div>
  );
};

export default Projects;

import fdpic from "../../../photo//360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg";
import fdpic3 from "../../../photo/download.png";
import fdpic2 from "../../../photo/images.jpeg";

const MyService = () => {
  return (
    <div className="mt-20 mb-20">
      <h1 className="text-3xl font-bold gray-800 flex justify-center">
        MY SERVICE
      </h1>
      <div className="border-l border-y-2 w-60 mt-10 mx-auto border-stone-200">

      </div>
      <div className="ml-40 grid grid-cols-3">
       
        <div className="card w-52 mt-20 bg-base-100 shadow-xl image-full">
          <figure>
            <img src={fdpic} alt="Shoes" />
          </figure>
          <div className="card-body w-full h-60 p-1 m-2 space-y-7">
            <h2 className="card-title ">Front End Development</h2>
            <p  className="">Before you start designing, take some time to think about what you want your website to achieve. Then you will benefit from hiring me.</p>
          </div>
        </div>
        <div className="card  w-52 mt-20  bg-base-100 shadow-xl image-full">
          <figure>
            <img src={fdpic2} alt="Shoes" />
          </figure>
          <div className="card-body w-full h-full  m-2 p-1">
            <h2 className="card-title ">MERN Stack Development</h2>
            <p className="pr-2">These three main technologies are used to build websites. Second, you need to be able to use these technologies to  create functional and attractive websites for users.</p>
          </div>
        </div>
        <div className="card  w-52 mt-20  bg-base-100 shadow-xl image-full">
          <figure>
            <img src={fdpic3} />
          </figure>
          <div className="card-body w-full h-full text-white p-1 m-2">
            <h2 className="card-title ">React js Development</h2>
            <p className="pr-2">React JS is a JavaScript library for creating user interfaces. This allows you to create reusable components that make your code easier to read and maintain.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyService;

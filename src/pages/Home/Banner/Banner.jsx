import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import CaroeslButton from "../CaroeslButton/CaroeslButton";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full rounded-lg">
        <img src={img1} className="w-full rounded-lg h-[600px] " />
        <div className=" absolute top-0 left-0   h-full bg-gradient-to-r rounded-lg from-[#151515] ">
         <div className="flex items-center mt-28 ">
         <div className="text-white  md:w-[50%] pl-8 space-y-6 h-full ">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn btn-warning tracking-widest">
                {" "}
                explore More{" "}
              </button>
              <button className="btn btn-outline tracking-widest text-white">
                {" "}
                latest projects{" "}
              </button>
            </div>
          </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0 ">
          <a href="#slide4" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full rounded-lg">
        <img src={img2} className="w-full rounded-lg h-[600px] " />
        <div className=" absolute top-0 left-0   h-full bg-gradient-to-r rounded-lg from-[#151515] ">
         <div className="flex items-center mt-28 ">
         <div className="text-white  w-[50%] pl-8 space-y-6 h-full ">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn btn-warning tracking-widest">
                {" "}
                explore More{" "}
              </button>
              <button className="btn btn-outline tracking-widest text-white">
                {" "}
                latest projects{" "}
              </button>
            </div>
          </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0 ">
          <a href="#slide1" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full rounded-lg">
        <img src={img3} className="w-full rounded-lg h-[600px] " />
        <div className=" absolute top-0 left-0   h-full bg-gradient-to-r rounded-lg from-[#151515] ">
         <div className="flex items-center mt-28 ">
         <div className="text-white  w-[50%] pl-8 space-y-6 h-full ">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn btn-warning tracking-widest">
                {" "}
                explore More{" "}
              </button>
              <button className="btn btn-outline tracking-widest text-white">
                {" "}
                latest projects{" "}
              </button>
            </div>
          </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0 ">
          <a href="#slide2" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full rounded-lg">
        <img src={img4} className="w-full rounded-lg h-[600px] " />
        <div className=" absolute top-0 left-0   h-full bg-gradient-to-r rounded-lg from-[#151515] ">
         <div className="flex items-center mt-28 ">
         <div className="text-white  w-[50%] pl-8 space-y-6 h-full ">
            <h1 className="text-5xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p>
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn btn-warning tracking-widest">
                {" "}
                explore More{" "}
              </button>
              <button className="btn btn-outline tracking-widest text-white">
                {" "}
                latest projects{" "}
              </button>
            </div>
          </div>
         </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 right-5 bottom-0 ">
          <a href="#slide3" className="btn btn-circle me-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;

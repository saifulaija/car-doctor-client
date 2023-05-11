import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col  lg:flex-row">
        <div className="lg:w-1/2 relative">
        <img src={person} className="w-2/3 rounded-lg shadow-2xl" />
        <img src={parts} className="w-1/2 rounded-lg shadow-2xl right-4 top-1/2 border-8 border-white absolute" />

        </div>
        <div className="lg:w-1/2 space-y-5">
            <h1 className="text-[#FF3811] font-bold tracking-widest text-2xl uppercase">about us</h1>
          <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
         <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn bg-[#FF3811]">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;

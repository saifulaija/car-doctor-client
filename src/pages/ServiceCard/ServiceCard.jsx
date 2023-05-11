import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;

  return (
    <div className="max-w-sm ring-2 border-none ring-sky-200 p-6 space-y-4 shadow-xl rounded-lg bg-gradient-to-b from-sky-200">
      <img className="aspect-video rounded-lg" src={img} alt="" />
      <p className="text-2xl font-bold">{title}</p>
      <div className=" flex justify-between items-center">
        <p className="text-md text-[#FF3811] font-semibold">price : {price}</p>
        <Link to={`/checkout/${_id}`}>
        
          <HiArrowLongRight className="text-3xl text-[#FF3811]"></HiArrowLongRight>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

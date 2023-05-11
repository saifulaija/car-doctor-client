import { HiCheck } from "react-icons/hi2";


const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
  const {_id, date, email, name, img, status } = booking;


  




  return (
    <div className="flex justify-between items-center  gap-5">
      <div>
        <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-sm me-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <img className="w-[100px] inline-block " src={img} alt="" />
      </div>
      <div>
        <p>{email}</p>
      </div>
      <div>
        <p>{date}</p>
      </div>
     {
      status === 'confirm' ? <> <HiCheck></HiCheck> <span className="text-teal-600 font-bold uppercase tracking-wider">confirm</span> </> :  <button onClick={()=>handleBookingConfirm(_id)} className="btn tracking-widest bg-sky-800">confirm</button>
     }
    </div>
  );
};

export default BookingRow;

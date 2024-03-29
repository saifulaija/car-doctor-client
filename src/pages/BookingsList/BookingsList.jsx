import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";
import { useNavigate } from "react-router-dom";

const BookingsList = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate()

  const url = `https://car-doctor-server-five-taupe.vercel.app/bookings?email=${user?.email}`;

  useEffect(() => {
  fetch(url, {
    method:'GET',
    headers:{
      authorization: `bearer ${localStorage.getItem('car-access-token')}`
    }
  })
      .then((res) => res.json())
      .then((data) => {

        if(!data.error){
          setBookings(data)
        }
        else{

          // logout and then navigate
          navigate('/')
        }
      
      });
  }, [url, navigate]);


  const handleDelete=(id)=>{
    const procced = confirm('are you sure want to delete');
 
    if(procced){
     
     fetch(`https://car-doctor-server-five-taupe.vercel.app/bookings/${id}`, {
       method: 'DELETE'
     })
     .then(res=>res.json())
     .then(data=>{
       console.log(data);
       if(data.deletedCount>0){
         alert('deleted successfully')
         const remaining = bookings.filter(booking=>booking._id !== id);
         setBookings(remaining)
       }
     })
    }
   }


   const handleBookingConfirm=(id)=>{

    fetch(`https://car-doctor-server-five-taupe.vercel.app/bookings/${id}`,{
      method:'PATCH',
      headers:{
        'content-type' : 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        const remaining = bookings.filter(booking=> booking._id !== id);
        const updated = bookings.find(booking=> booking._id == id);
        updated.status = 'confirm'
        const newBooking = [updated, ...remaining]
        setBookings(newBooking)

      }


    })

   }



  return (
    <div>
       <h1>Your Booking category: {bookings.length}</h1>
     <div className=" grid divide-y-4  mt-7 mx-2 p-4 grid-cols-1 gap-4 divide-teal-300">
     {bookings.map((booking) => (
        <BookingRow key={booking.service_id} booking={booking} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>
      ))}
     </div>
    </div>
  );
};

export default BookingsList;

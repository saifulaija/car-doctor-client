import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const CheckOut = () => {


    const {user} = useContext(AuthContext)
  const service = useLoaderData();
  const { __id, title, price, img } = service;

  const handleBook = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const date = form.date.value;
    
    const address = form.address.value;
    const phone = form.phone.value;
    const order ={
        name, email, date,  address, phone, price:price, service_id: __id, service:title, img:img 
    }

    console.log(order);

    // data sent to db

    fetch('http://localhost:5000/bookings',{
        method:'POST',
        headers:{
            'content-type': 'application/json'
        },
       body:JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.insertedId){
            alert('servece book successfully')
        }
    })

  }

  return (
    <form onSubmit={handleBook}> 
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            placeholder="Your name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            placeholder="Your email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            name="address"
            
            placeholder="Your address"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Order Date</span>
          </label>
          <input
            type="date"
            name="date"
           
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone number</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Your phone"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Amount</span>
          </label>
          <input
            type="text"
            name="amount"
           defaultValue={price}
            className="input input-bordered"
          />
        </div>
        
      </div>
      <div className=" mx-auto w-full mt-6">
          <input
            type="submit"
            value="Order confirm "
            className="btn btn-primary btn-block tracking-widest"
          />
        </div>
    </form>
  );
};

export default CheckOut;

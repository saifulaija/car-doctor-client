import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";


const Service = () => {

      const [services, setServices] = useState();

      useEffect(()=>{
            fetch('http://localhost:5000/services')
            .then(res=>res.json())
            .then(data=> setServices(data))
      },[])
      console.log(services);



      return (
            <div className="my-10">
                  <div className="text-center max-w-lg mx-auto leading-6 space-y-8">
                  <h1 className="text-[#FF3811] font-bold tracking-widest text-2xl uppercase">Service</h1>
                  <p className="text-md text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                  
                  </div>
                  <div className="grid md:grid-cols-3 gap-8 my-10">

                  {
                        services?.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
                  }

                  </div>
                 <div className="text-center">
                 <button className=" btn btn-outline btn-warning outline-offset-8  ">more service</button>
                 </div>
            </div>
      );
};

export default Service;
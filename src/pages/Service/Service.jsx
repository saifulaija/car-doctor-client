import { useEffect, useRef, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Service = () => {
  const [services, setServices] = useState();
  const [asc, setAsc] = useState(true);
  const [search, setSearch]= useState('');

  const searchRef = useRef(null);

  const handleSearch =()=>{
     
     setSearch(searchRef.current.value);


  }

  console.log(search);

  useEffect(() => {
    fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? "asc" : "dsc"}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [asc, search]);
  console.log(services);

  return (
    <div className="my-10">
      <div className="text-center max-w-lg mx-auto leading-6 space-y-8">
        <h1 className="text-[#FF3811] font-bold tracking-widest text-2xl uppercase">
          Service
        </h1>
        <p className="text-md text-gray-500">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              ref={searchRef}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button onClick={() => setAsc(!asc)} className="btn btn-success">
          {asc ? "Price high to low" : "price low to high"}
        </button>
      </div>
      <div className="grid md:grid-cols-3 gap-8 my-10">
        {services?.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
        <button className=" btn btn-outline btn-warning outline-offset-8  ">
          more service
        </button>
      </div>
    </div>
  );
};

export default Service;

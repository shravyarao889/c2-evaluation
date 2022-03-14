import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export const AddHouse = () => {
  const [formData, setFormdata] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    preferred_tenants: "",
  });

  const [getdatabaseData, setdatabaseData] = useState([]);

  const handlechange = (e) => {
    const preferred_tenants = e.target.id === "married" && e.target.checked === true ? "married" : "bachelor";
    const { id, value } = e.target;

    if (id === "married" || id === "bachelor") {
      setFormdata({ ...formData, preferred_tenants: preferred_tenants });
    }
    else {
      setFormdata({ ...formData, [id]: value });
    }
  }
  useEffect(() => {
    getData();
  }, []);


  const handlesubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/houses", formData).then(() => {
      alert("house added successfully");
    });
  }

  const getData = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      setdatabaseData(res.data);
  })
}


  return (
    <div className="addHouseContainer">
      <form onSubmit={handlesubmit}>
        <label>name</label>
        <input type="text" className="name"  required id="name" onChange={handlechange} />
        <br />
        <label>ownerName</label>
        <input  type="text" className="ownerName" required id="ownerName" onChange={handlechange}/>
        <br />
        <label>address</label>
        <input type="text" className="address" required id="address" onChange={handlechange}/>
        <br />
        <label>areaCode</label>
        <input  type="text" className="areaCode" required id="areaCode" onChange={handlechange} />
        <br />
        <label>rent</label>
        <input  type="text" className="rent" required id="rent" onChange={handlechange} />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input  type="checkbox" className="bachelor" id="bachelor" onChange={handlechange} />
        <br />
        <label>married</label>
        <input  type="checkbox" className="married" id="married" onChange={handlechange}/>
        <br />
        <label>image</label>
        <input  type="text" className="image"  id="image" onChange={handlechange} />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};

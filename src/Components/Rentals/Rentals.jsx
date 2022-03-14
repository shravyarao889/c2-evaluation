import "./Rentals.css";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const Rentals = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);


  const getData = () => {
    axios.get("http://localhost:8080/houses").then((res) => {
      setData(res.data);
  })
}
  
 // const [data, setData] = useState(data1)

  const sortId=()=>{
    data.sort(function (a,b) {return b.id-a.id});
    setData(data);
  }
  const sortrenstasc=()=>{
    data.sort(function (a,b) {return a.rent-b.rent});
     setData([...data]);
  }
  const sortrenstdec=()=>{
    data.sort(function (a,b) {return b.rent-a.rent});
     setData([...data]);
    //  console.log(data);
  }
  const sortAreaacs=()=>{
    data.sort(function (a,b) {return a.areaCode-b.areaCode});
    setData([...data]);
  }
  const sortAreadsc=()=>{
    data.sort(function (a,b) {return b.areaCode-a.areaCode});
    setData([...data]);
  }
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={sortId}>Sort by ID</button>
        <button className="sortByRentAsc" onClick={sortrenstasc}>Rent Low to high</button>
        <button className="sortByRentDesc" onClick={sortrenstdec}>Rent High to low</button>
        <button className="sortByAreaAsc" onClick={sortAreaacs}>Area Low to high</button>
        <button className="sortByAreaDesc" onClick={sortAreadsc}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  { house.preferred_tenants/* Show text Both or Bachelors or Married based on values */}
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

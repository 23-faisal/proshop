import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleItem from "../../components/SingleItem/SingleItem";

const HomePage = () => {
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setShopData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <div className="grid grid-cols-3 gap-y-10 gap-6 ">
          {shopData.map((data) => (
            <div key={data.id}>
              <SingleItem data={data} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

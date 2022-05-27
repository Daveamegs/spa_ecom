import { useQuery } from "@apollo/client";
import React from "react";
import { GET_CATEGORIES } from "../queries/Queries";

const AllItem = ({ loading, error, data }) => {
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h1>Error!!!</h1>;

  const categoryName = data.map(({ name }) => name);
  // const products = data.map(({ products }) => products);

  // console.log(`All Category: ${categoryName}`);
  // console.log(data);

  return (
    // Recommended / Best Practices
    <div className="">
      <h1>{categoryName}</h1>
      <div className="">
        {data.map(({ products }) => {
          return (
            <div className="card--item">
              {products.map(({ id, name, gallery, prices, description }) => {
                return (
                  <div key={id} className="item--area">
                    <img src={gallery[0]} alt="" className="item--image" />
                    <h2 className="item--name">{name}</h2>
                    <h2 className="item--price">{prices[0].amount}</h2>
                  </div>
                );
              })}
            </div>
          );
        })}

        {/* {products.map(({ id, name, brand, description, gallery, prices }) => {
          return (
            <div key={id} className="item--area">
              <img src={gallery[0]} alt="" className="item--image" />
              <h2 className="item--name">{name}</h2>
              <h2 className="item--price">{prices[0].amount}</h2>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default AllItem;

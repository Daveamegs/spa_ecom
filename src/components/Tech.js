import React from "react";
import Item from "./Item";

const Tech = ({ loading, error, data }) => {
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h1>Error!!!</h1>;

  const categoryName = data.map(({ name }) => name);
  // const products = data.map(({ products }) => products);

  // console.log(`All Category: ${categoryName}`);
  // console.log(data);

  return (
    // Recommended / Best Practices
    <div className="">
      <h1 className="category-name">{categoryName}</h1>
      {data.map(({ products }) => {
        return (
          <div className="grid-container">
            {products.map(({ id, name, gallery, prices, description }) => {
              return (
                <Item
                  key={id}
                  productName={name}
                  images={gallery}
                  prices={prices}
                  description={description}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Tech;

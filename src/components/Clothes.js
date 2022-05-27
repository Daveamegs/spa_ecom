import React from "react";

const Clothes = ({ loading, error, data }) => {
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
      </div>
    </div>
  );
};

export default Clothes;

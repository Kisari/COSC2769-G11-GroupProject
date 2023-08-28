import React from "react";

const ProductCard = ({
  imageUrl,
  badges,
  title,
  category,
  originalPrice,
  discountPrice,
}) => (
  <div className="col-lg-4 col-md-6 mb-4">
    <div className="card">
      <div
        className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
        data-mdb-ripple-color="light"
      >
        <img src={imageUrl} alt="..." className="w-100" />
        <a href="#!">
          <div className="mask">
            <div className="d-flex justify-content-start align-items-end h-100">
              {badges &&
                badges.map((badge, index) => (
                  <h5 key={index}>
                    <span className={`badge ${badge.color} ms-2`}>
                      {badge.text}
                    </span>
                  </h5>
                ))}
            </div>
          </div>
          <div className="hover-overlay">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </div>
        </a>
      </div>
      <div className="card-body">
        <a href="" className="text-reset">
          <h5 className="card-title mb-3">{title}</h5>
        </a>
        <a href="" className="text-reset">
          <p>{category}</p>
        </a>
        {discountPrice ? (
          <h6 className="mb-3">
            <s>{originalPrice}</s>
            <strong className="ms-2 text-danger">{discountPrice}</strong>
          </h6>
        ) : (
          <h6 className="mb-3">{originalPrice}</h6>
        )}
      </div>
    </div>
  </div>
);

const BestsellersSection = () => {
  const products = [
    {
      imageUrl:
        "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp",
      badges: [{ color: "bg-primary", text: "New" }],
      title: "Product name",
      category: "Category",
      originalPrice: "$61.99",
    },
    // Add more product entries here
  ];

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="text-center container py-5">
        <h4 className="mt-4 mb-5">
          <strong>Bestsellers</strong>
        </h4>

        <div className="row">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestsellersSection;

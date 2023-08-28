import React from "react";

const Card = ({ data, statistic }) => {
  return (
    <div className="card mb-3 h-100">
      <div className="card-header" style={{ background: "#bfe5cf" }}>
        {data?.feature}
      </div>
      <div className="card-body">
        <h5 className="card-title fw-bold text-black">{data?.title}</h5>
        <p className="card-text text-wrap text-muted">{data?.text}</p>
        {statistic && (
          <div className="progress mb-3">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${data?.account}%` }}
            ></div>
            <span className="ms-auto">{data?.account}%</span>
          </div>
        )}
        <a className="btn btn-custom" href={data?.feature}>
          {data?.actionText}
        </a>
      </div>
    </div>
  );
};

export default Card;

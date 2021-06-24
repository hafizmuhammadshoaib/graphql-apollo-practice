import React from "react";
import { CityMetaData } from "../../types";
import "./weather.scss";

export const Weather = (props: CityMetaData) => {
  return (
    <div className="container text-light">
      <div className="Card">
        <h1 className="text-white py-3">{props.name}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weather.summary.icon} display-1`} />
        </h5>

        {/* Get Celsius */}
        {props.weather.temperature.actual ? (
          <h1 className="py-2">{props.weather.temperature.actual}&deg;</h1>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(
          props.weather.temperature.min,
          props.weather.temperature.max
        )}

        {/* Weather description */}
        <h4 className="py-3">
          {props.weather.summary.description.charAt(0).toUpperCase() +
            props.weather.summary.description.slice(1)}
        </h4>
      </div>
    </div>
  );
};

function maxminTemp(min: number, max: number) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}

import React from "react";
import "./Styles.scss";

interface IRadioProps {
  radioList: { label: string; value: string }[];
  onClick: (value: string) => void;
  //   selectedValue:string;
}

function RadioFilters({ radioList, onClick }: IRadioProps) {
  return (
    <div className="radio-wrapper">
      <div className="filter-header">Gender</div>
      {radioList.map((radio) => (
        <div key={radio.label} className="filter-item">
          <label htmlFor={radio.label} className="filter-label">
            <input
              defaultChecked={radio.value === ""}
              type="radio"
              id={radio.label}
              name="radio-filter"
              onClick={() => onClick(radio.value)}
            />
            {radio.label}
          </label>
          <br />
        </div>
      ))}
    </div>
  );
}

export default RadioFilters;

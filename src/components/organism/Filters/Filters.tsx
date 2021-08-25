import React, { ChangeEvent } from "react";
import { CountObj } from "../../../shared/Types";
import "./Filters.scss";

interface IFilterProps {
  filterName: string;
  filterList: CountObj[];
  onCheck: (name: string) => void;
}
function Filters({ filterList, filterName, onCheck }: IFilterProps) {
  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onCheck(e.currentTarget.name);
  };
  return (
    <div className="filters-wrapper">
      <div className="filter-header">{filterName}</div>
      {filterList.slice(0, 8).map((filter) => (
        <div key={filter.name} className="filter-item">
          <label className="filter-label">
            <input
              type="checkbox"
              name={filter.name}
              id={filter.name}
              onChange={handleCheck}
            />
            {filter.name} <span className="filter-count">({filter.count})</span>
          </label>
        </div>
      ))}
      <div className="more-label">+{filterList.length - 8} more</div>
    </div>
  );
}

export default React.memo(Filters);

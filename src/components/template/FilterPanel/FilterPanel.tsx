import React from "react";
import { CountObj } from "../../../shared/Types";
import { Filters, RadioFilters } from "../../organism";
import { Actions, IPayLoad } from "../../page/ProductPage/utils";
import "./Styles.scss";

export interface FilterObj {
  name: Actions;
  filterList: CountObj[];
}

interface PanelProps {
  filterObjList: FilterObj[];
  dispatchAction: React.Dispatch<IPayLoad>;
}

const Radios = [
  { label: "All", value: "" },
  { label: "Men", value: "Men" },
  { label: "Women", value: "Women" },
  { label: "Boys", value: "Boys" },
  { label: "Girls", value: "Girls" },
];

function FilterPanel({ filterObjList, dispatchAction }: PanelProps) {
  return (
    <div className="filter-panel-wrapper">
      <RadioFilters
        radioList={Radios}
        onClick={(value) =>
          dispatchAction({ payload: value, type: Actions.Gender })
        }
      />
      {filterObjList.map((filter) => (
        <Filters
          filterName={filter.name}
          filterList={filter.filterList}
          onCheck={(check) =>
            dispatchAction({ payload: check, type: filter.name })
          }
        />
      ))}
    </div>
  );
}

export default React.memo(FilterPanel);

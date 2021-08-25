import React, { useMemo, useReducer, useState } from "react";
import { useProductData } from "../../../services/DataHandler";
import { CardGrid, FilterPanel, Header } from "../../template";
import { FilterObj } from "../../template/FilterPanel/FilterPanel";
import { countDistinct, filterReducer, FilterState, Actions } from "./utils";
import "./Styles.scss";

function ProductPage() {
  const { isLoading, data } = useProductData();
  const [Searched, setSearched] = useState("");
  const [filterState, dispatch] = useReducer(filterReducer, FilterState);
  const FilterObjList: FilterObj[] = useMemo(
    () =>
      data
        ? [
            {
              name: Actions.Brand,
              filterList: countDistinct(data.products.map((p) => p.brand)),
            },
            {
              name: Actions.Category,
              filterList: countDistinct(data.products.map((p) => p.category)),
            },
          ]
        : [],
    [data]
  );

  const ProductList = useMemo(
    () =>
      data
        ? data.products.filter((p) => {
            //filter on search
            if (!p.productName.includes(Searched)) return false;

            //filter on checkboxes
            if (filterState.brand.size !== 0 && !filterState.brand.has(p.brand))
              return false;
            if (
              filterState.category.size !== 0 &&
              !filterState.category.has(p.category)
            )
              return false;

            //filter on radiobtns
            if (filterState.gender !== "" && filterState.gender !== p.gender)
              return false;
            return true;
          })
        : [],
    [filterState, data, Searched]
  );

  return (
    <div className="product-page-wrapper">
      {isLoading
        ? "Loading..."
        : data && (
            <>
              <Header setSearch={setSearched} />
              <div className="product-section">
                <FilterPanel
                  filterObjList={FilterObjList}
                  dispatchAction={dispatch}
                />
                <CardGrid productList={ProductList} />
              </div>
            </>
          )}
    </div>
  );
}

export default React.memo(ProductPage);

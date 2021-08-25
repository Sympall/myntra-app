import { CountObj } from "../../../shared/Types";

export const countDistinct = (data: string[]): CountObj[] => {
  const obj: { [key: string]: number } = {};

  for (let i = 0; i < data.length; i++) {
    if (data[i] in obj) {
      obj[data[i]] += 1;
    } else {
      obj[data[i]] = 1;
    }
  }

  const countObj: CountObj[] = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      countObj.push({ name: key, count: obj[key] });
    }
  }

  return countObj;
};

export const FilterState = {
  brand: new Set<string>(),
  category: new Set<string>(),
  gender: "",
};

export enum Actions {
  Brand = "Brands",
  Category = "Categories",
  Gender = "Gender",
}

export interface IPayLoad {
  type: Actions;
  payload: string;
}

const toggleSetValue = (set: Set<string>, value: string) => {
  if (set.has(value)) {
    console.log("removed", value);
    set.delete(value);
  } else {
    console.log("added", value);
    set.add(value);
  }
};

export const filterReducer = (
  state: typeof FilterState,
  payload: IPayLoad
): typeof FilterState => {
  switch (payload.type) {
    case Actions.Brand:
      const brand = new Set(state.brand);
      toggleSetValue(brand, payload.payload);
      return { ...state, brand };

    case Actions.Category:
      const cat = new Set(state.category);
      toggleSetValue(cat, payload.payload);
      return { ...state, category: cat };

    case Actions.Gender:
      return { ...state, gender: payload.payload };

    default:
      console.log("reset filters");
      return FilterState;
  }
};

import { FILE_UPLOAD } from "./investorTypes";

import data from "../../data";

let initialState = {
  data,
};

export const fileUploadReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILE_UPLOAD:
      return {
        data: [...data, action.payload],
      };

    default:
      return state;
  }
};

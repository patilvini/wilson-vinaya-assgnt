import { FILE_UPLOAD } from "./investorTypes";

export const fileUploadAction = (data) => ({
  type: FILE_UPLOAD,
  payload: data,
});

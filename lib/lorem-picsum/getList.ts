import {PicsumImage, validateImage} from "./image";

import axios from "axios";
const baseUrl = "https://picsum.photos/v2";

export type GetList = (params: {
  limit: number;
  page?: number;
}) => Promise<PicsumImage[]>;
export const getList: GetList = async params => {
  try {
    const response = await axios.get(`${baseUrl}/list`, {params});
    return (response.data ?? []).map(validateImage);
  } catch (error) {
    console.error(error);
    return [];
  }
};

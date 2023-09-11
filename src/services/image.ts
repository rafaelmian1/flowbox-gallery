import {getList} from "../../lib/lorem-picsum";

export const useGetImageList = () => {
  return (limit: number, page?: number) => getList({limit, page});
};

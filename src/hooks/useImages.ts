import {useGetImageList} from "@services/image";
import {useQuery} from "@tanstack/react-query";

const limit = 12;

export const useImagesQuery = () => {
  const getImages = useGetImageList();
  return useQuery(["imageList"], () => getImages(limit));
};

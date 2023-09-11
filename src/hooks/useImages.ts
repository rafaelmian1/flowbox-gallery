import {useGetImageList} from "@services/image";
import {useQuery} from "@tanstack/react-query";

export const useImagesQuery = () => {
  const getImages = useGetImageList();
  return useQuery(["imageList"], () => getImages(8));
};

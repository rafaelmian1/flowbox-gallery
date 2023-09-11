import {useSelectedLayout} from "@store/appStore";
import {CarouselLayout} from "./CarouselLayout";
import {GridLayout} from "./GridLayout";
import {ListLayout} from "./ListLayout";
import {useImagesQuery} from "@hooks/useImages";
import {Loader} from "@components/Loader";

export const MainLayout = () => {
  const selectedLayout = useSelectedLayout();
  const imagesListQuery = useImagesQuery();

  if (imagesListQuery.isLoading) return <Loader />;

  return (
    <div className="bg-white shadow-lg h-screen w-screen grid place-content-center lg:items-center lg:justify-center">
      {selectedLayout === "carousel" ? <CarouselLayout /> : null}
      {selectedLayout === "grid" ? <GridLayout /> : null}
      {selectedLayout === "list" ? <ListLayout /> : null}
    </div>
  );
};

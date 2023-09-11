import {useSelectedLayout} from "@store/appStore";
import {Header} from "@components/Header";
import {CarouselLayout} from "./CarouselLayout";
import {GridLayout} from "./GridLayout";
import {ListLayout} from "./ListLayout";
import {useImagesQuery} from "@hooks/useImages";
import {Loader} from "@components/Loader";

export const MainLayout = () => {
  const selectedLayout = useSelectedLayout();
  const imagesListQuery = useImagesQuery();

  if (imagesListQuery.isLoading) return <Loader />;

  //ToDo: Error component
  if (imagesListQuery.isError) return null;

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main
        className="grid grow place-content-center bg-gray-300 pt-6 shadow-lg"
        style={{scrollbarGutter: "stable both-edges"}}
      >
        {selectedLayout === "carousel" ? (
          <CarouselLayout images={imagesListQuery.data} />
        ) : null}

        {selectedLayout === "grid" ? (
          <GridLayout images={imagesListQuery.data} />
        ) : null}

        {selectedLayout === "list" ? (
          <ListLayout images={imagesListQuery.data} />
        ) : null}
      </main>
    </div>
  );
};

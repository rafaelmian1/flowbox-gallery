import {ImageCard} from "@components/ImageCard";
import {PicsumImage} from "@lib/lorem-picsum";

type GridLayoutProps = {
  images: PicsumImage[];
};

export const GridLayout = (props: GridLayoutProps) => {
  return (
    <section className="grid grid-cols-1 place-items-center gap-4 p-2 md:grid-cols-2 md:p-4 lg:grid-cols-3">
      {props.images.map(image => (
        <ImageCard key={image.id} image={image} />
      ))}
    </section>
  );
};

import {ImageCard} from "@components/ImageCard";
import {PicsumImage} from "@lib/lorem-picsum";

type ListLayoutProps = {
  images: PicsumImage[];
};

export const ListLayout = (props: ListLayoutProps) => {
  return (
    <section className="flex w-screen flex-col items-center gap-4 px-2 md:px-4">
      {props.images.map(image => (
        <ImageCard key={image.id} image={image} variant="horizontal" />
      ))}
    </section>
  );
};

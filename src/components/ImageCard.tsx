import {PicsumImage} from "@lib/lorem-picsum";
import {useSelectedLayout} from "@store/appStore";
import twMerge from "clsx";

type ImageCardProps = {
  image: PicsumImage;
  variant?: "horizontal" | "vertical";
};

export const ImageCard = (props: ImageCardProps) => {
  const selectedLayout = useSelectedLayout();

  const vertical = (
    <article
      className={twMerge(
        "hover: max-w-[90vw] overflow-hidden rounded-xl bg-gray-200 object-cover shadow-lg hover:shadow-xl md:max-w-[50vw]",
        selectedLayout === "carousel" ? "cursor-grab" : "cursor-pointer",
      )}
    >
      <img
        className="w-full object-cover"
        src={props.image.download_url}
        alt="Random image"
        data-testid={props.image.id}
      />
      <div className="h-[12vh] p-2 xl:p-4">
        <h3 className="text-lg lg:mb-1 lg:text-2xl">{props.image.author}</h3>
        <p className="line-clamp-2 text-ellipsis text-xs lg:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum
          aliquam voluptatem modi sint deleniti, dolores facilis sequi et ut
          dolor, assumenda animi obcaecati accusantium quas soluta dolore
          perferendis expedita!
        </p>
      </div>
    </article>
  );

  const horizontal = (
    <article
      className={twMerge(
        "mb-6 flex max-w-[90vw] overflow-hidden rounded-xl bg-gray-200 object-cover shadow-lg hover:shadow-xl md:max-w-[75vw]",
        selectedLayout === "carousel" ? "cursor-grab" : "cursor-pointer",
      )}
    >
      <img
        className="w-[42vw] object-cover"
        src={props.image.download_url}
        alt="Random image"
      />
      <div className="flex h-full flex-col justify-center gap-4 p-2 lg:p-4">
        <h3 className="text-lg lg:mb-1 lg:text-3xl">{props.image.author}</h3>
        <p className="line-clamp-4 text-ellipsis text-xs lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illum
          aliquam voluptatem modi sint deleniti, dolores facilis sequi et ut
          dolor, assumenda animi obcaecati accusantium quas soluta dolore
          perferendis expedita!
        </p>
      </div>
    </article>
  );

  return props.variant === "horizontal" ? horizontal : vertical;
};

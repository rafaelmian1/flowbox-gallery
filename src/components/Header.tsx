import {useSelectedLayout, useSetSelectedLayout} from "@store/appStore";
import {BiCarousel, BiGrid, BiListUl} from "react-icons/bi";

export const Header = () => {
  const setSelectedLayout = useSetSelectedLayout();
  const selectedLayout = useSelectedLayout();
  return (
    <header className="flex min-h-[8vh] items-center justify-around px-2 md:px-8">
      <a href="https://getflowbox.com">
        <img
          className=" w-18 md:w-32"
          src="https://getflowbox.com/wp-content/uploads/2022/10/flowbox-logo.svg"
          alt="logo"
        />
      </a>

      <span className="mt-[7px] text-lg text-gray-900 md:mt-1 md:text-[1.6rem]">
        Photo Gallery.
      </span>

      <nav className="flex items-center gap-6">
        <BiCarousel
          data-testid="carousel-layout-button"
          className="cursor-pointer text-[1.2rem] md:text-[2rem]"
          color={selectedLayout === "carousel" ? "#7F3DF3" : "black"}
          role="button"
          onClick={() => setSelectedLayout("carousel")}
        />
        <BiGrid
          data-testid="grid-layout-button"
          className="cursor-pointer text-[1.2rem] md:text-[2rem]"
          color={selectedLayout === "grid" ? "#7F3DF3" : "black"}
          role="button"
          onClick={() => setSelectedLayout("grid")}
        />
        <BiListUl
          data-testid="list-layout-button"
          className="cursor-pointer text-[1.2rem] md:text-[2rem]"
          color={selectedLayout === "list" ? "#7F3DF3" : "black"}
          role="button"
          onClick={() => setSelectedLayout("list")}
        />
      </nav>
    </header>
  );
};

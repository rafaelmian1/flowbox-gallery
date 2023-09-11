import {useSetSelectedLayout} from "@store/appStore";
import {BiCarousel, BiGrid, BiListUl} from "react-icons/bi";

export const Header = () => {
  const setSelectedLayout = useSetSelectedLayout();
  return (
    <header className="align-center flex min-h-[8vh] justify-around px-2 md:px-8">
      <div className="flex items-center gap-2">
        <a href="https://getflowbox.com">
          <img
            className=" w-18 md:w-32"
            src="https://getflowbox.com/wp-content/uploads/2022/10/flowbox-logo.svg"
            alt="logo"
          />
        </a>
        <span className="mt-[7px] text-lg text-gray-900 md:mt-2 md:text-[1.6rem]">
          Gallery.
        </span>
      </div>

      <nav className="flex items-center gap-6">
        <BiCarousel
          className="cursor-pointer text-[1.2rem] md:text-[2rem]"
          color="black"
          role="button"
          onClick={() => setSelectedLayout("carousel")}
        />
        <BiGrid
          className="cursor-pointer text-[1.2rem] md:text-[2rem]"
          color="black"
          role="button"
          onClick={() => setSelectedLayout("grid")}
        />
        <BiListUl
          className="cursor-pointer text-[1.2rem] md:text-[2rem]"
          color="black"
          role="button"
          onClick={() => setSelectedLayout("list")}
        />
      </nav>
    </header>
  );
};

import {render, screen, userEvent} from "@utils/test";
import {CarouselLayout} from "../layouts/CarouselLayout";
import images from "@mock/images";

describe("Carousel navigation", () => {
  it("slide to the next image", async () => {
    render(<CarouselLayout images={images} />);
    expect(await screen.findByTestId(images[0].id)).toBeInTheDocument();
    document
      .querySelector(".swiper-button-prev")
      ?.setAttribute("data-testid", "carousel-button-prev");
    document
      .querySelector(".swiper-button-next")
      ?.setAttribute("data-testid", "carousel-button-next");

    userEvent.click(await screen.findByTestId(/carousel-button-next/i));
    expect(await screen.findByTestId(images[1].id)).toBeInTheDocument();

    userEvent.click(await screen.findByTestId(/carousel-button-prev/i));
    expect(await screen.findByTestId(images[0].id)).toBeInTheDocument();
  });
});

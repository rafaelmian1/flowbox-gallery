import {render, screen, userEvent} from "@utils/test";
import {App} from "../App";

describe("Simple functionality test", () => {
  it("renders headline", async () => {
    render(<App />);
    const headline = await screen.findByAltText(/flowbox-logo/i);
    expect(headline).toBeInTheDocument();
  });

  it("changes layouts", async () => {
    render(<App />);
    userEvent.click(await screen.findByTestId(/grid-layout-button/i));
    expect(
      await screen.findByTestId(/grid-layout-container/i),
    ).toBeInTheDocument();

    userEvent.click(await screen.findByTestId(/list-layout-button/i));
    expect(
      await screen.findByTestId(/list-layout-container/i),
    ).toBeInTheDocument();

    userEvent.click(await screen.findByTestId(/carousel-layout-button/i));
    expect(
      await screen.findByTestId(/carousel-layout-container/i),
    ).toBeInTheDocument();
  });
});

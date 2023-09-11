import {render, screen, userEvent} from "@utils/test";
import {App} from "../App";

describe("Simple functionality test", () => {
  it("renders headline", async () => {
    render(<App />);
    const headline = await screen.findByText(/Photo Gallery./i);
    expect(headline).toBeInTheDocument();
  });

  it("changes layouts", async () => {
    render(<App />);
    userEvent.click(await screen.findByTestId("grid-layout-button"));
    expect(
      await screen.findByTestId("grid-layout-container"),
    ).toBeInTheDocument();

    userEvent.click(await screen.findByTestId("list-layout-button"));
    expect(
      await screen.findByTestId("list-layout-container"),
    ).toBeInTheDocument();

    userEvent.click(await screen.findByTestId("carousel-layout-button"));
    expect(
      await screen.findByTestId("carousel-layout-container"),
    ).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react-native";
import { Divider } from "../divider";

describe("components/divider/<Divider />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders component properly", () => {
    render(<Divider />);

    expect(screen.getByTestId("components.divider")).toBeTruthy();
  });
});

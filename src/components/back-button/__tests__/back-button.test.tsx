import { fireEvent, render, screen } from "@testing-library/react-native";
import { BackButton } from "../back-button";

const mockGoBack = jest.fn();

jest.mock("../back-button.hook", () => ({
  useBackButton: () => ({
    handleGoBack: mockGoBack,
  }),
}));

describe("components/back-button/<BackButton />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders component properly", () => {
    render(<BackButton />),
      expect(screen.getByTestId("components.back-button")).toBeTruthy();
  });

  it("calls handleGoBack when component is pressed", () => {
    render(<BackButton />);

    fireEvent.press(screen.getByTestId("components.back-button"));

    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });
});

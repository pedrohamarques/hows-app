import { fireEvent, render, screen } from "@testing-library/react-native";

import { CustomButton } from "../button-custom";

const mockValues = {
  text: "Test",
  loading: false,
};

const mockOnPress = jest.fn();

describe("components/button-custom/<CustomButton />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders button properly when loading is false", () => {
    render(<CustomButton {...mockValues} />);

    expect(screen.getByTestId("components.button-custom")).toBeTruthy();
    expect(screen.getByText("Test")).toBeTruthy();

    expect(screen.queryByTestId("components.button-custom.loading")).toBeNull();
  });

  it("renders button properly when loading is true", () => {
    render(<CustomButton {...mockValues} loading />);

    expect(screen.getByTestId("components.button-custom")).toBeTruthy();
    expect(screen.queryByText("Test")).toBeNull();

    expect(screen.getByTestId("components.button-custom.loading")).toBeTruthy();
  });

  it("calls onPress when button is pressed", () => {
    render(<CustomButton {...mockValues} onPress={mockOnPress} />);

    fireEvent.press(screen.getByTestId("components.button-custom"));

    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });
});

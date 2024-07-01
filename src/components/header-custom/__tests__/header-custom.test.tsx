import { fireEvent, render, screen } from "@testing-library/react-native";
import { CustomHeader } from "../header-custom";

const mockValues = {
  title: "Title",
  hasAvatar: false,
  canGoBack: true,
};

const mockHandleAvatarPress = jest.fn();

jest.mock("../header-custom.hook", () => ({
  useCustomHeader: () => ({
    user: {
      photoUrl: "image",
    },
    handleAvatarPress: mockHandleAvatarPress,
  }),
}));

jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({
    top: 5,
  }),
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

describe("components/header-custom/<CustomHeader />", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders component properly when it can go back", () => {
    render(<CustomHeader {...mockValues} />);

    expect(screen.getByTestId("components.header-custom")).toBeTruthy();
    expect(
      screen.getByTestId("components.header-custom.back-button")
    ).toBeTruthy();
    expect(screen.getByText("Title")).toBeTruthy();

    expect(
      screen.queryByTestId("components.header-custom.image-avatar")
    ).toBeNull();
  });

  it("renders component properly when it cannot go back", () => {
    render(<CustomHeader {...mockValues} canGoBack={false} />);

    expect(screen.getByTestId("components.header-custom")).toBeTruthy();
    expect(screen.getByText("Title")).toBeTruthy();

    expect(
      screen.queryByTestId("components.header-custom.back-button")
    ).toBeNull();
    expect(
      screen.queryByTestId("components.header-custom.image-avatar")
    ).toBeNull();
  });

  it("renders component properly when it has an avatar", () => {
    render(<CustomHeader {...mockValues} hasAvatar />);

    expect(screen.getByTestId("components.header-custom")).toBeTruthy();
    expect(screen.getByText("Title")).toBeTruthy();

    expect(
      screen.getByTestId("components.header-custom.back-button")
    ).toBeTruthy();

    expect(
      screen.getByTestId("components.header-custom.image-avatar")
    ).toBeTruthy();
  });

  it("calls handleAvatarPress when avatar is pressed", () => {
    render(<CustomHeader {...mockValues} hasAvatar />);

    fireEvent.press(
      screen.getByTestId("components.header-custom.image-avatar")
    );

    expect(mockHandleAvatarPress).toHaveBeenCalledTimes(1);
  });
});

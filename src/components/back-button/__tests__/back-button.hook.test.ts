import { act, renderHook } from "@testing-library/react-native";

import { useBackButton } from "../back-button.hook";

const mockGoBack = jest.fn();

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    goBack: mockGoBack,
  }),
}));

describe("components/back-button/useBackButton", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("navigates to previous screen when handleGoBack is called", () => {
    const { result } = renderHook(() => useBackButton());

    act(() => result.current.handleGoBack());

    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });
});

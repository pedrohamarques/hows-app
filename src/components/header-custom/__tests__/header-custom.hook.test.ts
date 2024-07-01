import { act, renderHook } from "@testing-library/react-native";
import { useCustomHeader } from "../header-custom.hook";

const mockNavigate = jest.fn();

jest.mock("@contexts/auth-context", () => ({
  useAuthContext: () => ({
    user: {
      id: 1,
    },
  }),
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

describe("components/header-custom/useCustomHeader", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("navigates to settings screen when handleAvatarPress is called", () => {
    const { result } = renderHook(() => useCustomHeader());

    act(() => result.current.handleAvatarPress());

    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });
});

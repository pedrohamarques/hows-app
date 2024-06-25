import { hp, wp } from "@utils/dimensions";

jest.mock("react-native", () => ({
  Dimensions: {
    get: jest.fn().mockReturnValue({ width: 200, height: 200 }),
  },
}));

describe("dimensions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("hp", () => {
    it("returns height percentage", () => {
      expect(hp(30)).toBe(60);
      expect(hp(20)).toBe(40);

      expect(hp(100)).not.toBe(100);
    });
  });

  describe("wp", () => {
    it("returns width percentage", () => {
      expect(wp(30)).toBe(60);
      expect(wp(20)).toBe(40);

      expect(wp(100)).not.toBe(100);
    });
  });
});

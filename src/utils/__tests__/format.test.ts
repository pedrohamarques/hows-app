import { formatImagePath } from "@utils/format";

describe("formatImagePath", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns only the the path after "/ImagePicker/"', () => {
    expect(formatImagePath("test/ImagePicker/something")).toBe("something");
    expect(formatImagePath("here/Hello/ImagePicker/Hello")).toBe("Hello");

    expect(formatImagePath("here")).toBeUndefined();
  });
});

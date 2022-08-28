import { formatMs } from "../formatMs";

describe("formatMs", () => {
  it("should convert milliseconds to mm:ss format", () => {
    const ms = 1000;

    expect(formatMs(ms)).toEqual("00:01");
  });

  it("should convert milliseconds to mm:ss format", () => {
    const ms = 1000 * 60 * 2;

    expect(formatMs(ms)).toEqual("02:00");
  });

  it("should convert milliseconds to mm:ss format", () => {
    const ms = 1000 * 60 * 2 + 30000;

    expect(formatMs(ms)).toEqual("02:30");
  });

  it("should round down the decimal number of seconds", () => {
    const ms = 1999;

    expect(formatMs(ms)).toEqual("00:01");
  });
});

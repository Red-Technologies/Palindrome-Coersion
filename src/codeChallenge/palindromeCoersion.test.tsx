import { runSolution } from "./palindromeCoersion";

describe("Palindrome Coersion", () => {
  const mockInput = 123;
  it("returns a number in output", () => {
    expect(typeof runSolution(mockInput).output).toEqual("number");
  });

  it("has same input returned that was given", () => {
    expect(runSolution(mockInput).input).toEqual(mockInput);
  });

  it("returns a valid number in flips", async () => {
    expect(typeof runSolution(mockInput).output).toEqual("number");
    expect(runSolution(mockInput).output >= 0).toBe(true);
  });

  it("returns the correct answer to 123", async () => {
    const expected = { flips: 1, output: 444, input: 123 };
    expect(runSolution(mockInput)).toEqual(expected);
  });

  it("returns the correct answer to 0", async () => {
    const expected = { flips: 0, output: 0, input: 0 };
    expect(runSolution(0)).toEqual(expected);
  });

  it("returns the correct answer to 34985734", async () => {
    const expected = { flips: 9, output: 7979731331379797, input: 34985734 };
    expect(runSolution(34985734)).toEqual(expected);
  });
});

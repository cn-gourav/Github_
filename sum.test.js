import sum from "./sum";

describe("test for sum fnx", () => {
    test("add 2 + 2 to equal to 4", () => {
        expect(sum(2, 2)).toBe(4);
    });

    test("add 2 + 3 to equal to 5", () => {
        expect(sum(2, 3)).toBe(5);
    });
});

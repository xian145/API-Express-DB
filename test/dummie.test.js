const Reader = require("../../lib/utils/Reader");

describe("Test para Reader", () => {
    test("1. has to have something", () => {
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers).not.toBe(undefined);
    });
});
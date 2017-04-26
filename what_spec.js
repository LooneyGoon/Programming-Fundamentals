var zodiacAnimalAssigner = require("../index");

describe("A program to give your sign and animal", () => {

	it("defines a function called zodiacAnimalAssigner", () => {
		expect(zodiacAnimalAssigner).toBeDefined();
		expect(typeof zodiacAnimalAssigner).toBe("function");
	});

	it("will take in an interger input", () => {
		expect((69)).toBe(true);
	});



});
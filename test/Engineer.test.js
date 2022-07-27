const Engineer = require("../lib/Engineer");

describe("Engineer class", () => {
  describe("Initialization", () => {
    it("should take in an id, name, email and github", () => {
      const engineer = new Engineer(
        100,
        "eddie",
        "Eddie@eddie.com",
        "Eddie-11"
      );

      expect(engineer.id).toqual(100);
      expect(engineer.name).toEqual("Eddie");
      expect(engineer.email).toEqual("Eddie@eddie.com");
      expect(engineer.officeumber).toEqual("Eddie-11");
    });
  });
});

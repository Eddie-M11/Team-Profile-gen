const Intern = require("../lib/Intern");

describe("Intern class", () => {
  describe("Initialization", () => {
    it("should take in an id, name, email and school", () => {
      const intern = new Intern(
        100,
        "Eddie",
        "Eddie@eddie.com",
        "denverUniversity"
      );

      expect(intern.id).toEqual(100);
      expect(intern.name).toEqual("Eddie");
      expect(intern.email).toEqual("Eddie@eddie.com");
      expect(intern.school).toEqual("denverUniversity");
    });
  });
});

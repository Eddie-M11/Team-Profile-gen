const Employee = require("../lib/Employee");

describe("Employee class", () => {
  describe("Initialization", () => {
    it("should take in an id, name, email and postion", () => {
      const employee = new Employee(
        100,
        "eddie",
        "Eddie@eddie.com",
        "developer"
      );

      expect(employee.id).toqual(100);
      expect(employee.name).toEqual("Eddie");
      expect(employee.email).toEqual("Eddie@eddie.com");
      expect(employee.officeumber).toEqual("developer");
    });
  });
});

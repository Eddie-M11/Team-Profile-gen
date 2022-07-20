const Manager = require('../lib/Manager');

describe('Manager class', () => {
  describe('Initialization', () => {
    it('should take in an id, name, email and officeNumber', () => {
      const manager = new Manager(100, 'Eddie', 'Eddie@eddie.com', 24);

      expect(manager.id).toEqual(100);
      expect(manager.name).toEqual('Eddie');
      expect(manager.email).toEqual('Eddie@eddie.com');
      expect(manager.officeNumber).toEqual(24);
    });
  });
});
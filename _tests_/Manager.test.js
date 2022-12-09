const Manger = require("../lib/Manager");
const Employee = require("../lib/Employee");
const { default: test } = require("node:test");
const { exportAllDeclaration } = require("@babel/types");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manger("Foo", 1, "test@test.com", testValue);
  exportAllDeclaration(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});


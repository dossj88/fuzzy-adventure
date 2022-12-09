const { exportAllDeclaration } = require("@babel/types");
const { default: test } = require("node:test");
const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UCI";
  const e = neew Intern("Foo", 1, "test@test.com", testValue);
  exportAllDeclaration(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@test.com", "UCI");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UCI";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
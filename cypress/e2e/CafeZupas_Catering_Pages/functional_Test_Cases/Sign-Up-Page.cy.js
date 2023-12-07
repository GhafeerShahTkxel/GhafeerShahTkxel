/// <reference types = 'cypress'/>

import signUpPage_PO from "../../../support/POM pages/SignUpPage_PO.cy";
const SignUpPage_PO = new signUpPage_PO();

describe("verifying the sign up functionality", () => {
  beforeEach(() => {
    SignUpPage_PO.visitSignUpPage();
  });

  it("Sign Up using an exisiting email address", () => {
    SignUpPage_PO.inputFirstName("Testing");
    SignUpPage_PO.inputLastName("Testing");
    SignUpPage_PO.inputEmail("testingshah96@gmail.com");
    SignUpPage_PO.inputPassword("Test12345@@");
    SignUpPage_PO.inputConfirmPassword("Test12345@@");
    SignUpPage_PO.clickCreateAccountBtn();
    SignUpPage_PO.elements
      .toast()
      .should("be.visible")
      .and("have.text", "The email has already been taken.");
  });

  it("Verify the error messages without filling any field", () => {
    SignUpPage_PO.clickCreateAccountBtn();
    SignUpPage_PO.elements
      .firstNameErrorMsg()
      .should("exist")
      .and("have.text", "First name is required");
    SignUpPage_PO.elements
      .lastNameErrorMsg()
      .should("exist")
      .and("have.text", "Last name is required");
    SignUpPage_PO.elements
      .emailErrorMsg()
      .should("exist")
      .and("have.text", "Email address is required");
    SignUpPage_PO.elements
      .passwordErrorMsg()
      .should("exist")
      .and("have.text", "Password is required");
    SignUpPage_PO.elements
      .confirmPswdErrorMsg()
      .should("exist")
      .and("have.text", "Password confirmation is required");
  });

  it("Verify creating an account without providing email field", () => {
    SignUpPage_PO.inputFirstName("Testing");
    SignUpPage_PO.inputLastName("Testing");
    SignUpPage_PO.inputPassword("Test12345@@");
    SignUpPage_PO.inputConfirmPassword("Test12345@@");
    SignUpPage_PO.clickCreateAccountBtn();
    SignUpPage_PO.elements
      .emailErrorMsg()
      .should("exist")
      .and("have.text", "Email address is required");
  });

  it("Verify creating an account without providing first name field", () => {
    SignUpPage_PO.inputLastName("Testing");
    SignUpPage_PO.inputEmail("testingshah96@gmail.com");
    SignUpPage_PO.inputPassword("Test12345@@");
    SignUpPage_PO.inputConfirmPassword("Test12345@@");
    SignUpPage_PO.clickCreateAccountBtn();
    SignUpPage_PO.elements
      .firstNameErrorMsg()
      .should("exist")
      .and("have.text", "First name is required");
  });

  it("Verify creating an account without providing last name field", () => {
    SignUpPage_PO.inputFirstName("Testing");
    SignUpPage_PO.inputEmail("testingshah96@gmail.com");
    SignUpPage_PO.inputPassword("Test12345@@");
    SignUpPage_PO.inputConfirmPassword("Test12345@@");
    SignUpPage_PO.clickCreateAccountBtn();
    SignUpPage_PO.elements
      .lastNameErrorMsg()
      .should("exist")
      .and("have.text", "Last name is required");
  });

  it("Verify creating an account without providing password field", () => {
    SignUpPage_PO.inputFirstName("Testing");
    SignUpPage_PO.inputLastName("Testing");
    SignUpPage_PO.inputEmail("testingshah96@gmail.com");
    SignUpPage_PO.inputConfirmPassword("Test12345@@");
    SignUpPage_PO.clickCreateAccountBtn();
    SignUpPage_PO.elements
      .passwordErrorMsg()
      .should("exist")
      .and("have.text", "Password is required");
  });

  it("Verify creating an account without providing confirm password field", () => {
    SignUpPage_PO.inputFirstName("Testing");
    SignUpPage_PO.inputLastName("Testing");
    SignUpPage_PO.inputEmail("testingshah96@gmail.com");
    SignUpPage_PO.inputPassword("Test12345@@");
    SignUpPage_PO.clickCreateAccountBtn();
    SignUpPage_PO.elements
      .confirmPswdErrorMsg()
      .should("exist")
      .and("have.text", "Password confirmation is required");
  });

  it("Verify creating an account by providing different password and confirm password", () => {
    SignUpPage_PO.inputFirstName("Testing");
    SignUpPage_PO.inputLastName("Testing");
    SignUpPage_PO.inputEmail("testingshah96@gmail.com");
    SignUpPage_PO.inputPassword("Test12345@@");
    SignUpPage_PO.inputConfirmPassword("Test12345@");
    SignUpPage_PO.clickCreateAccountBtn();
    SignUpPage_PO.elements
      .difPasswordErrorMsg()
      .should("exist")
      .and("have.text", "Password does not match");
  });

  it("Verify that the first name field is not an alphanumeric field", () => {
    SignUpPage_PO.inputFirstName("Testing1");
    SignUpPage_PO.inputLastName("Testing");
    SignUpPage_PO.inputEmail("testingshah96@gmail.com");
    SignUpPage_PO.inputPassword("Test12345@@");
    SignUpPage_PO.inputConfirmPassword("Test12345@@");
    SignUpPage_PO.clickCreateAccountBtn();
    SignUpPage_PO.elements
      .numeralFirstNameErrorMsg()
      .should("exist")
      .and(
        "have.text",
        "First name should not contain special characters or numbers"
      );
  });

  it("Verify that the last name field is not an alphanumeric field", () => {
    SignUpPage_PO.inputFirstName("Testing");
    SignUpPage_PO.inputLastName("Testing1");
    SignUpPage_PO.inputEmail("testingshah96@gmail.com");
    SignUpPage_PO.inputPassword("Test12345@@");
    SignUpPage_PO.inputConfirmPassword("Test12345@@");
    SignUpPage_PO.clickCreateAccountBtn();
    SignUpPage_PO.elements
      .numeralLastNameErrorMsg()
      .should("exist")
      .and(
        "have.text",
        "Last name should not contain special characters or numbers"
      );
  });
});

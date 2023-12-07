/// <reference types = 'cypress'/>

import signUpPage_PO from "../../../support/POM pages/SignUpPage_PO.cy";
const SignUpPage_PO = new signUpPage_PO();

describe("UI related Test cases for Sign Up Page", () => {
  beforeEach(() => {
    SignUpPage_PO.visitSignUpPage();
  });
  it("Document has the property Charset", () => {
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
  });

  it("Verify the URL link", () => {
    cy.url().should("include", "/createAccount");
  });

  it("Verify the title of the login page", () => {
    cy.title().should("include", "Cafe Zupas");
  });

  it("verify that the back button is present on the Sign Up page", () => {
    SignUpPage_PO.elements.backBtn().should("exist").and("have.text", "Back");
  });

  it("Verify that the heading on the signup page is visible", () => {
    SignUpPage_PO.elements
      .pageHeading()
      .should("be.visible")
      .and("have.text", "Create an Account");
  });

  it("Verify the names on all the input fields and buttons", () => {
    SignUpPage_PO.elements
      .firstNameTitle()
      .should("be.visible")
      .and("have.text", "First Name");
    SignUpPage_PO.elements
      .lastNameTitle()
      .should("be.visible")
      .and("have.text", "Last Name");
    SignUpPage_PO.elements
      .emailTitle()
      .should("be.visible")
      .and("have.text", "EMAIL ADDRESS");
    SignUpPage_PO.elements
      .passwordTitle()
      .should("be.visible")
      .and("have.text", "PASSWORD");
    SignUpPage_PO.elements
      .confirmPassowrdTitle()
      .should("be.visible")
      .and("have.text", "Confirm Password");
    SignUpPage_PO.elements
      .birthdayTitle()
      .should("be.visible")
      .and("include.text", "Birthday(MM/DD)");
    SignUpPage_PO.elements
      .createAccountBtn()
      .should("be.visible")
      .and("have.text", "CREATE MY ACCOUNT");
  });
});

class signUpPage_PO {
  elements = {
    firstNameField: () => cy.get("input[placeholder='First Name']"),
    lastNameField: () => cy.get("input[placeholder='Last Name']"),
    emailField: () => cy.get("input[placeholder='Email Address']"),
    passwordField: () => cy.get("input[placeholder='Password']"),
    confirmPassowrdField: () => cy.get("input[placeholder='Confirm Password']"),
    birthdayField: () => cy.get("#birthday"),

    firstNameTitle: () =>
      cy.get(
        "div[class='App'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) label:nth-child(1)"
      ),

    lastNameTitle: () =>
      cy.get(":nth-child(2) > :nth-child(1) > .form-group > label"),

    emailTitle: () =>
      cy.get(
        ":nth-child(2) > :nth-child(1) > :nth-child(1) > .form-group > label"
      ),

    passwordTitle: () =>
      cy.get(":nth-child(2) > :nth-child(2) > .form-group > label"),

    confirmPassowrdTitle: () =>
      cy.get(":nth-child(3) > :nth-child(1) > .form-group > label"),

    birthdayTitle: () => cy.get(".form-group > .d-flex"),

    createAccountBtn: () =>
      cy.get("div[class='max-content mx-auto'] button[type='button']"),

    backBtn: () =>
      cy.get(
        ".btn.btn-custom.btn-custom-transparent.back-arrow-btn.f-s14.px-0.mb-0"
      ),

    pageHeading: () =>
      cy.get(".title_lg.mb-4.text-start.ls-05.text-capitalize.font-Cls"),

    toast: () => cy.get(".Toastify__toast-body"),

    firstNameErrorMsg: () =>
      cy.get(
        ":nth-child(1) > :nth-child(1) > :nth-child(1) > .form-group > .clr-dark-red"
      ),

    numeralFirstNameErrorMsg: () =>
      cy.get(
        "div[class='form-group'] div[class='form-group'] span[class='clr-dark-red f-s14 font-rale mt-1 d-inline-block']"
      ),

    numeralLastNameErrorMsg: () =>
      cy.get(
        "body > div:nth-child(2) > div:nth-child(1) > main:nth-child(1) > div:nth-child(2) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(3)"
      ),

    lastNameErrorMsg: () =>
      cy.get(":nth-child(2) > :nth-child(1) > .form-group > .clr-dark-red"),

    emailErrorMsg: () =>
      cy.get(
        ":nth-child(2) > :nth-child(1) > :nth-child(1) > .form-group > .clr-dark-red"
      ),

    passwordErrorMsg: () =>
      cy.get(':nth-child(2) > .form-group > [data-testid="error-span"]'),

    confirmPswdErrorMsg: () =>
      cy.get(':nth-child(1) > .form-group > [data-testid="error-span"]'),

    difPasswordErrorMsg: () =>
      cy.get(".clr-dark-red.f-s14.font-rale.mt-1.d-inline-block"),
  };

  visitSignUpPage() {
    cy.visit("/createAccount");
  }
  inputFirstName(firstName) {
    this.elements.firstNameField().type(firstName, { force: true });
  }

  inputLastName(lastName) {
    this.elements.lastNameField().type(lastName, { force: true });
  }

  inputEmail(email) {
    this.elements.emailField().type(email, { force: true });
  }

  inputPassword(password) {
    this.elements.passwordField().type(password, { force: true });
  }

  inputConfirmPassword(conrifmPassword) {
    this.elements.confirmPassowrdField().type(conrifmPassword, { force: true });
  }

  inputBirthday(birthday) {
    this.elements.birthdayField().type(birthday, { force: true });
  }

  clickCreateAccountBtn() {
    this.elements.createAccountBtn().click({ force: true });
  }
}
export default signUpPage_PO;

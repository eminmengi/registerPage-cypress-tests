import { errorMesages } from "../../src/components/Register";
describe('Register page', () => {
  beforeEach(()=> {
    cy.visit('http://localhost:5173/');
  })
  describe('Error Messages', () => {
    it('Name input throws error for 2 chars', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      cy.get('[data-cy="ad-input"]').type("em")
      //Assert
      cy.contains(errorMesages.ad)
    });
    it('Surname input throws error for 2 chars', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      cy.get('[data-cy="soyad-input"]').type("me")
      //Assert
      cy.contains(errorMesages.soyad)
    });
    it('Email input throws error for asd@asd.', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      cy.get('[data-cy="email-input"]').type("asd@asd.")
      //Assert
      cy.contains(errorMesages.email)
    });
    it('Password input throws error for 123456', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      cy.get('[data-cy="password-input"]').type("123456")
      //Assert
      cy.contains(errorMesages.password)
    });
    it('Button is disabled for univalidated inputs.', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      
      //Assert
      cy.get('[data-cy="submit-button"]').should("be.disabled")
    });
  });
  describe('Form inputs vidated', () => {
    it('Button enabled for vilidated inputs', () => {
      //Arrange
      //cy.visit('http://localhost:5173/');
      //Act
      cy.get('[data-cy="ad-input"]').type("Emin")
      cy.get('[data-cy="soyad-input"]').type("Mengi")
      cy.get('[data-cy="email-input"]').type("emin@mengi.com.tr")
      cy.get('[data-cy="password-input"]').type("1234Aa**")
      //Assert
      cy.get('[data-cy="submit-button"]').should("not.be.disabled")
    });
  });
  describe('Successful Registration', () => {
  it('Should navigate to /Success page when form is submitted correctly', () => {
    cy.get('[data-cy="ad-input"]').type("Emin");
    cy.get('[data-cy="soyad-input"]').type("Mengi");
    cy.get('[data-cy="email-input"]').type("emin@mengi.com");
    cy.get('[data-cy="password-input"]').type("1234Aa**");

    cy.get('[data-cy="submit-button"]').click();

    // URL'nin /success içerdiğini kontrol et
    cy.url().should('include', '/success');

    // Sayfa içeriğinde success mesajı var mı?
    cy.contains("Form başarıyla gönderildi").should("be.visible");
  });
  });
});
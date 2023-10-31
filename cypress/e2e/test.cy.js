describe('Test NameFunctions', () => {

  beforeEach("Test", () => {
    cy.visit('index.html')
  })

  it('Marcus', () => {
    cy.get("input").type("Marcus");
    cy.get("button").click();
    cy.get("p").should("contain.text", "Hello Marcus")
  })

  it('Niklas', () => {
    cy.get("input").type("Niklas");
    cy.get("button").click();
    cy.get("p").should("contain.text", "Hello Niklas")
  })
})
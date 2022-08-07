/* eslint-disable no-undef */
describe("Watchlist spec", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.polygon.io/v2/aggs/ticker/X:ETHUSD/prev?adjusted=true&apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4",
      { fixture: "mockdata.json" }
    );
    cy.visit("http://localhost:3000/");
  });

  it("should be able to add a coin to a watchlist", () => {
    cy.get(".coin-button").eq(0).click();
    cy.get(".add-to-watchlist").click();
    cy.get(".watchlist").click();
    cy.get(".coin-logo").should("be.visible");
  });

  it("Should only have items in the watchlist if the user adds them", () => {
    cy.get(".watchlist").click();
    cy.get(".coin-logo").should("not.exist");
  });

  it("should show the correct url and be able to navigate back to homepage", () => {
    cy.get(".watchlist").click();
    cy.url().should("include", "/watchlist");
    cy.go("back").get(".coin-button").should("have.length.greaterThan", 3);
    cy.go("forward").url().should("include", "/watchlist");
  });
});

/* eslint-disable no-undef */
describe("HomePage Spec", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      `https://api.polygon.io/v2/aggs/ticker/X:ETHUSD/prev?adjusted=true&apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4`,
      { fixture: "mockData.json" }
    );
    cy.visit("http://localhost:3000/");
  });

  it("Should show the correct URL", () => {
    cy.url().should("include", "");
  });
  it("Should a have title for the app", () => {
    cy.get(".nav-bar").get("h1").contains("Alt-Coinsters");
  });

  it("Should have a dropdown to select 21 other coins", () => {
    cy.get("select").get("option").should("have.length", 21);
  });

  it("Should have the ability to choose from dropdown and land on correct page", () => {
    cy.get("select").select("MONERO");
    cy.get(".search-coin").click();
    cy.get(".chart").should("exist");
    cy.url().should("include", "/coin/XMR");
  });

  it("Should have multiple butttons for specific coins that will send the user to its details", () => {
    cy.get(".coin-button").should("have.length.greaterThan", 3);
    cy.get(".coin-button").eq(0).click();
    cy.get(".chart").should("be.visible");
  });

  it("Should have multiple headers for different sections", () => {
    cy.get("h2").should("have.length.greaterThan", 3);
  });

  // it.skip("Should have Ethereum's information showing on page load", () => {
  //   cy.get(".chart").should("be.visible");
  //   cy.get(".previous-volume").should("exist");
  //   cy.get(".previous-high").should("exist");
  //   cy.get(".previous-low").should("exist");
  //   cy.get(".previous-close").should("exist");
  //   cy.get(".coin-details").get(".annual-high-value").should("exist");
  //   cy.get(".annual-low-value").should("exist");
  //   cy.get(".annual-volume-value").should("exist");
  //   cy.get(".coin-information").should("exist");
  //   cy.get(".coin-name").contains("Ethereum");
  //   cy.get("h3").contains("ETH");
  // });
});

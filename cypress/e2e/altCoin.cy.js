describe("Alt-Coin spec", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      `https://api.polygon.io/v2/aggs/ticker/X:ADAUSD/prev?adjusted=true&apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4`,
      { fixture: "mockdata.json" }
    );
    cy.visit("http://localhost:3000");
    cy.get("select").select("CARDANO");
    cy.get(".search-coin").click();
  });

  it("Should show ADA's name Cardano", () => {
    cy.get("h2").contains("CARDANO");
  });

  it("Should display Cardano's annual chart", () => {
    cy.get(".chart").should("exist");
    cy.get(".chart-display").should("be.visible");
  });

  it("Should have all of Cardano's information populated ", () => {
    cy.get(".chart").should("be.visible");
    cy.get("h2").contains("CARDANO");
    cy.get("span").contains("ADA");
    cy.get(".previous-volume").should("have.value", "");
    cy.get(".previous-high").should("exist");
    cy.get(".previous-low").should("have.value", "");
    cy.get(".previous-close").should("exist");
  });

  it("Should have an about section at the bottom", () => {
    cy.get("h2").contains("About");
  });

  it("Should have the ability to navigate back to the homepage and come back", () => {
    cy.go("back")
      .get(".coin-button")
      .should("have.length.greaterThan", 2)
      .go("forward");
  });

  it("Should be at the correct url", () => {
    cy.url().should("include", "/coin/ADA");
  });
});

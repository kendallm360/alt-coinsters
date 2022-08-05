describe("Alt-Coin spec", () => {
  beforeEach(() => {
    cy.fixture("alt-coin.json").then((results) => {
      cy.intercept(
        "GET",
        `https://api.polygon.io/v2/aggs/ticker/X:ADAUSD/prev?adjusted=true&apiKey=mlvQmPrXbKKHEum7bADMetPy2uIJj4K4`,
        results
      );
      cy.visit("http://localhost:3000");
    });
  });

  it("should be able to choose Cardano and go to its landing page", () => {
    cy.get("select").select("CARDANO");
    cy.get("button").eq(0).click();
  });

  it.only("Should have all of Cardano's information populated after selection", () => {
    cy.get(".chart").should("be.visible");
    cy.get("h2").contains("CARDANO");
    cy.get("h3").contains("ADA");
    cy.get(".previous-volume").should("exist");
    cy.get(".previous-high").should("exist");
    cy.get(".previous-low").should("exist");
    cy.get(".previous-close").should("exist");
    // cy.get(".coin-details").get(".annual-high-value").should("exist");
    // cy.get(".annual-low-value").should("exist");
    // cy.get(".annual-volume-value").should("exist");
  });
});

describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("Should a have title for the app", () => {
    cy.get(".nav-bar").get("h1").contains("Alt-Coinsters");
  });

  it("Should have a dropdown to select 21 other coins", () => {
    cy.get("select").get("option").should("have.length", 21);
  });
});

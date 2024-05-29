describe("DemoQA", () => {

  it("clicks TWO, FOUR, SIX, EIGHT", () => {
    const itemsToClick = ["Two", "Four", "Six", "Eight"];
    const itemsNotActive = ["One", "Three", "Five", "Seven", "Nine"];

    cy.visit("https://demoqa.com/selectable");
    cy.get("#demo-tab-grid").click();

    // Click the specified items
    itemsToClick.forEach(item => {
      cy.get(".list-group-item")
        .contains(item)
        .should("be.visible")
        .click();
    });

    // Verify the non-active items
    itemsNotActive.forEach(item => {
      cy.get(".list-group-item")
        .contains(item)
        .should("not.have.class", "active");
    });
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
});

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

function routes() {
  return [
    {
      name: "Home",
      path: "/",
      url: "",
    },
  ].map((route) => {
    route.url = `${Cypress.config().baseUrl}${route.path}`;
    return route;
  });
}
const defaultRoute = routes()[0];

function getPageRouteFromName(pageName: string) {
  return routes().find((route) => route.name === pageName) || defaultRoute;
}

When("the user visits the {string} page", (pageName: string) => {
  cy.visit(`${getPageRouteFromName(pageName).path}`);
});

Then("the {string} heading should be visible", (textContent: string) => {
  cy.findByRole("heading", { name: textContent }).should("be.visible");
});

Then("the {string} text should be visible", (textContent: string) => {
  cy.findByText(textContent).should("be.visible");
});

Then("the {string} text should be hidden", (textContent: string) => {
  cy.findByText(textContent).should("not.exist");
});

Then("the following list of teams should be visible", (dataTable: any) => {
  const dataTableItems = dataTable.hashes();
  cy.get('ul[aria-label="Teams"] > li')
    .should("have.length", dataTableItems.length)
    .each((teamItem, index) => {
      const dataTableItem = dataTableItems[index];
      cy.wrap(teamItem).within(() => {
        cy.findByRole("heading", { name: dataTableItem.name });
      });
    });
});

Then("the following list of people should be visible", (dataTable: any) => {
  const dataTableItems = dataTable.hashes();
  cy.get('ul[aria-label="People"] > li')
    .should("have.length", dataTableItems.length)
    .each((personElement, index) => {
      const dataTableItem = dataTableItems[index];

      cy.wrap(personElement).within(() => {
        cy.findByRole("heading", { name: dataTableItem.name });

        if (dataTableItem.title) {
          cy.findByRole("heading", { name: dataTableItem.title });
        }

        if (dataTableItem.tools) {
          const dataTableItemPersonTools = commaSeparatedStingToArray(
            dataTableItem.tools
          );

          cy.get('ul[aria-label="Tools"] > li')
            .should("have.length", dataTableItemPersonTools.length)
            .each((toolsListElement, index) => {
              const dataTableItemToolName = dataTableItemPersonTools[index];

              cy.wrap(toolsListElement).should(
                "contain.text",
                dataTableItemToolName
              );
            });
        }
      });
    });
});

When("they clear the {string} input", (textFieldLabel: string) => {
  cy.findByLabelText(textFieldLabel).clear();
});

When(
  "they type {string} in the {string} input",
  (textFieldValue: string, textFieldLabel: string) => {
    cy.findByLabelText(textFieldLabel).type(textFieldValue);
  }
);

function commaSeparatedStingToArray(commaSeparatedSting: string) {
  return commaSeparatedSting.split(",").map(function (item: string) {
    return item.trim();
  });
}

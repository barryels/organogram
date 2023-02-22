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

Then("the {string} text should be visible", (textContent: string) => {
  cy.findByText(textContent).should("be.visible");
});

Then("the {string} text should be hidden", (textContent: string) => {
  cy.findByText(textContent).should("not.exist");
});

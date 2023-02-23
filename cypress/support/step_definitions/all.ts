import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

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

interface Person {
  name: string;
}

interface Organisation {
  name: string;
  people: Person[];
}
const organisations: Organisation[] = [
  {
    name: "ACME",
    people: [
      {
        name: "Anita N Smith",
      },
    ],
  },
];
const defaultOrganisation = organisations[0];

function getPageRouteFromName(pageName: string) {
  return routes().find((route) => route.name === pageName) || defaultRoute;
}

function findMockOrganisationFromName(organisationName: string): Organisation {
  return (
    organisations.find((org) => org.name === organisationName) ||
    defaultOrganisation
  );
}

When("the user visits the {string} page", (pageName: string) => {
  cy.visit(`${getPageRouteFromName(pageName).path}`);
});

Given("the selected organisation is {string}", (organisationName: string) => {
  const organisation = findMockOrganisationFromName(organisationName);
  cy.intercept(`${Cypress.config().baseUrl}/organisations/current.json`, {
    statusCode: 200,
    body: organisation,
  });
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

Then("the following list of people should be visible", (dataTable: any) => {
  const dataTableItems = dataTable.hashes();
  cy.get(`ul[aria-label='People'] li`)
    .should("have.length", dataTableItems.length)
    .each((personItem, index) => {
      const dataTableItem = dataTableItems[index];
      cy.wrap(personItem).should("contain.text", dataTableItem.name);
    });
});

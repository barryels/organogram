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
  id: string;
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
      { id: "1b24be77-b80a-43d4-b058-4dc70529cd5f", name: "Anita N Smith" },
      { id: "20adf084-2135-448e-81a9-da2f837379f3", name: "Jeremy Tamsin" },
      { id: "559ab840-9a9d-4b9a-85d5-ed4f71035ba0", name: "Yarik Aina" },
      { id: "5ee9a24e-968d-4e98-b428-16e2a8f269e7", name: "Juliet Boban" },
      { id: "4e44b75d-ee8e-49c1-b942-ae9bafd580b4", name: "Mao Josie" },
      { id: "67889dd6-9487-47dd-a1f6-0100c7caf7d7", name: "Ebba Titus" },
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

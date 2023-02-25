type ToolID = string;

export interface Person {
  id: string;
  name: string;
  title: string;
  toolIds: ToolID[];
}

interface Tool {
  id: string;
  name: string;
}

export interface PersonHydrated {
  id: string;
  name: string;
  title: string;
  toolIds: ToolID[];
  tools: Tool[];
}

interface Team {
  id: string;
  name: string;
}

interface Organisation {
  name: string;
  tools: Tool[];
  people: Person[];
  teams: Team[];
}

interface OrganisationHydrated {
  name: string;
  tools: Tool[];
  people: PersonHydrated[];
  teams: Team[];
}

export function getCurrentOrganisation(): Promise<OrganisationHydrated> {
  return fetch(`./organisations/current.json`)
    .then((res) => {
      return res.json();
    })
    .then((json: Organisation) => {
      const peopleToolsHydrated = json.people.map((person: Person) =>
        hydrateTools(person, json.tools)
      );
      return {
        ...json,
        people: peopleToolsHydrated,
      };
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

function hydrateTools(person: Person, tools: Tool[]): PersonHydrated {
  const hydratedTools = person.toolIds.map((id) => {
    const foundTool = tools.find((tool) => tool.id === id);
    return foundTool
      ? foundTool
      : {
          id: id,
          name: "",
        };
  });

  return {
    ...person,
    tools: hydratedTools,
  };
}

type ToolID = string;

export interface Person {
  id: string;
  name: string;
  title: string;
  tools: ToolID[];
  toolNames: Tool[];
}

interface Tool {
  id: string;
  name: string;
}

export interface HydratedPerson {
  id: string;
  name: string;
  title: string;
  tools: ToolID[];
  toolNames: Tool[];
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

export function getCurrentOrganisation(): Promise<Organisation> {
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

function hydrateTools(person: Person, tools: Tool[]): HydratedPerson {
  const hydratedTools = person.tools.map((id) => {
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
    toolNames: hydratedTools,
  };
}

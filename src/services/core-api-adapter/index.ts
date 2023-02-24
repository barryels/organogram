interface Person {
  id: string;
  name: string;
}

interface Team {
  id: string;
  name: string;
}

interface Organisation {
  name: string;
  people: Person[];
  teams: Team[];
}

export function getCurrentOrganisation(): Promise<Organisation> {
  return fetch(`./organisations/current.json`)
    .then((res) => {
      return res.json();
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

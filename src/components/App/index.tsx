import { createEffect, createResource, createSignal, For } from "solid-js";
import type { Component } from "solid-js";
import {
  Person,
  getCurrentOrganisation,
} from "../../services/core-api-adapter";

import styles from "./index.module.css";

const App: Component = () => {
  const [organisation] = createResource(getCurrentOrganisation, {
    initialValue: { name: "", people: [], teams: [], tools: [] },
  });
  const [peopleList, setPeopleList] = createSignal([] as Person[]);

  createEffect(() => {
    if (organisation()) {
      setPeopleList(organisation().people);
      return;
    }
  });

  function onNameSearchInputChange(e: any) {
    const value = e.target.value;
    setPeopleList(
      organisation().people.filter((person) => {
        return person.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
      })
    );
  }

  function onSearchFormSubmit(e: SubmitEvent) {
    e.preventDefault();
  }

  return (
    <div class={styles.App}>
      {organisation.loading && <div>Loading...</div>}

      <header class={styles.header}>
        <h1>{organisation().name}</h1>
      </header>

      <section>
        <form onSubmit={onSearchFormSubmit}>
          <input
            aria-label="Search by name"
            type="text"
            onInput={onNameSearchInputChange}
          />
          <button type="submit">Search</button>
        </form>

        <hr />

        <h2>People</h2>
        <ul aria-label="People">
          <For each={peopleList()}>
            {(person) => (
              <li>
                <h3>{person.name}</h3>
                <h4>{person.title}</h4>
                <ul aria-label="Tools">
                  <For each={person.toolNames}>
                    {(tool) => <li>{tool.name}</li>}
                  </For>
                </ul>
              </li>
            )}
          </For>
        </ul>

        <hr />

        <h2>Teams</h2>
        <ul aria-label="Teams">
          <For each={organisation().teams}>
            {(team) => (
              <li>
                <h3>{team.name}</h3>
              </li>
            )}
          </For>
        </ul>
      </section>
    </div>
  );
};

export default App;

import { createEffect, createResource, createSignal, For } from "solid-js";
import type { Component } from "solid-js";
import { Person, getCurrentOrganisation } from "./services/core-api-adapter";

import styles from "./App.module.css";

const App: Component = () => {
  const [organisation] = createResource(getCurrentOrganisation, {
    initialValue: { name: "", people: [], teams: [] },
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

        <h2>Teams</h2>
        <ul aria-label="Teams">
          <For each={organisation().teams}>
            {(teams) => (
              <li>
                <a target="_blank">{teams.name}</a>
              </li>
            )}
          </For>
        </ul>

        <h2>People</h2>
        <ul aria-label="People">
          <For each={peopleList()}>
            {(person) => (
              <li>
                <a target="_blank">{person.name}</a>
              </li>
            )}
          </For>
        </ul>
      </section>
    </div>
  );
};

export default App;

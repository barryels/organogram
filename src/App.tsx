import { createResource, For } from "solid-js";
import type { Component } from "solid-js";

import styles from "./App.module.css";

const fetchOrganisation = async () =>
  (await fetch(`./organisations/current.json`)).json();

const App: Component = () => {
  const [organisation] = createResource(fetchOrganisation);

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <h1>{organisation() && organisation().name}</h1>
      </header>

      <section>
        {organisation() && (
          <ul aria-label="People">
            <For each={organisation().people}>
              {(person) => (
                <li>
                  <a target="_blank">{person.name}</a>
                </li>
              )}
            </For>
          </ul>
        )}
      </section>
    </div>
  );
};

export default App;

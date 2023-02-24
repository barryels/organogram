import { createResource, For } from "solid-js";
import type { Component } from "solid-js";
import { getCurrentOrganisation } from "./services/core-api-adapter";

import styles from "./App.module.css";

const App: Component = () => {
  const [organisation] = createResource(getCurrentOrganisation, {
    initialValue: { name: "", people: [] },
  });

  return (
    <div class={styles.App}>
      {organisation.loading && <div>Loading...</div>}

      <header class={styles.header}>
        <h1>{organisation().name}</h1>
      </header>

      <section>
        <ul aria-label="People">
          <For each={organisation().people}>
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

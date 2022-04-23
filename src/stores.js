import { writable } from "svelte/store";

function createResultsStore() {
  const { set, subscribe, update } = writable([]);

  return {
    set,
    subscribe,
    update,
    add: (result) => update(results => [result, ...results]),
    delete: (id) => update(results => results.filter(result => result.id != id))
  };
}

export const resultsStore = createResultsStore();

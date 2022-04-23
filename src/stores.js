import { writable } from "svelte/store";

function createResultsStore() {
  const { set, subscribe, update } = writable([]);

  return {
    set,
    subscribe,
    update,
    add: (result) => update(results => [result, ...results]),
    addAll: (newResults) => update(results => [...newResults, ...results]),
    delete: (id) => update(results => results.filter(result => result.id != id)),
    clear: () => update(() => []),
    toggleDefinition: (id) => update(results => {
      let result = results.find(result => result.id == id);
      result.showDefinition = !result.showDefinition;
      return results;
    }),
  };
}

export const resultsStore = createResultsStore();

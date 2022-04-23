import { writable } from "svelte/store";

function createResultsStore() {
  const defaultHistory = [{ "word": "VALID", "definition": "sound, legally adequate [adj VALIDER, VALIDEST, VALIDLY]", "valid": true, "id": "16507028076590", "showDefinition": false }, { "word": "NOTVALID", "definition": "", "valid": false, "id": "16507028075550", "showDefinition": false }];
  const savedHistory = localStorage.getItem("history");
  const history = savedHistory?.length > 2 ? JSON.parse(savedHistory) : defaultHistory;

  const { set, subscribe, update } = writable(history);

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

resultsStore.subscribe(history => {
  localStorage.setItem("history", JSON.stringify(history));
});

import { writable } from "svelte/store";

function createResultsStore() {
  const defaultHistory = [{ "word": "VALID", "definition": "sound, legally adequate [adj VALIDER, VALIDEST, VALIDLY]", "valid": true, "id": "16507028076590", "showDefinition": true }, { "word": "NOTVALID", "definition": "", "valid": false, "id": "16507028075550", "showDefinition": false }];
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


function createOptionsStore() {
  const defaultOptions = {
    showDefinition: true,
    showValid: true,
    showInvalid: true,
    showHistory: true,
  };
  const savedOptions = localStorage.getItem("options");
  const options = savedOptions ? JSON.parse(savedOptions) : defaultOptions;

  const { set, subscribe, update } = writable(options);

  return {
    set,
    subscribe,
    update,
    toggleDefinition: (setValue) => update(options => {
      if (setValue !== undefined) {
        options.showDefinition = setValue;
      } else {
        options.showDefinition = !options.showDefinition;
      }
      return options;
    }),
    toggleValid: (setValue) => update(options => {
      if (setValue !== undefined) {
        options.showValid = setValue;
      } else {
        options.showValid = !options.showValid;
      }
      return options;
    }),
    toggleInvalid: (setValue) => update(options => {
      if (setValue !== undefined) {
        options.showInvalid = setValue;
      } else {
        options.showInvalid = !options.showInvalid;
      }
      return options;
    }),
    toggleHistory: (setValue) => update(options => {
      if (setValue !== undefined) {
        options.showHistory = setValue;
      } else {
        options.showHistory = !options.showHistory;
      }
      return options;
    }),
  };
}

export const optionsStore = createOptionsStore();

optionsStore.subscribe(options => {
  localStorage.setItem("options", JSON.stringify(options));
});

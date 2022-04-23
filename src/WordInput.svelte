<script>
  import { resultsStore } from "./stores.js";
  import { checkWord } from "./checkWord.js";
  import { optionsStore } from "./stores.js";

  export let wordInput = "";
  $: wordInput = wordInput.replaceAll(/[^a-zA-Z, ]/g, "").toUpperCase();

  let previousGuess = "";

  let currentResults = [];
  let loading = "idle";
  $: valid = currentResults.every((result) => result.valid);

  async function handleSubmit() {
    previousGuess = wordInput;
    loading = "loading";
    let results = await checkWord(wordInput, $optionsStore);
    currentResults = results;
    resultsStore.addAll(results);
    loading = "loaded";
  }
</script>

<form on:submit|preventDefault={() => handleSubmit(wordInput)} autocomplete="off">
  <div class={`input-wrapper ${loading} ${valid ? "valid" : "invalid"}`}>
    <input
      type="text"
      name="word-input"
      id="word-input"
      bind:value={wordInput}
      on:input={() => {
        if (wordInput != previousGuess) {
          loading = "idle";
        } else {
          loading = "loaded";
        }
      }}
    />
    <div>
      {#if loading === "loaded"}
        {#if valid}
          <span>✔</span>
        {:else}
          <span>✖</span>
        {/if}
      {:else if loading === "loading"}
        <span>...</span>
      {/if}
    </div>
  </div>
</form>

<style lang="scss">
  .valid {
    --input-color: green;
  }

  .invalid {
    --input-color: red;
  }

  .loaded {
    color: var(--input-color);

    #word-input {
      font-weight: 600;
    }
  }

  #word-input {
    margin: 0;
    width: 100%;
  }

  .input-wrapper {
    border: solid 1px #ddd;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    flex-flow: row nowrap;
    padding: 0.25rem 0.75rem;
  }

  input[type="text"] {
    border: none;
    outline: none;
  }

  input[type="text"]:active {
    border: none;
    outline: none;
    box-shadow: none;
  }

  form {
    max-width: 360px;
    margin: 0 auto;
  }
</style>

<script>
  import { resultsStore } from "./stores.js";
  import { checkWord } from "./checkWord.js";
  import LDSSpinner from "./LDSSpinner.svelte";
  import { onMount } from "svelte";

  export let wordInput = "";
  $: wordInput = wordInput.replaceAll(/[^a-zA-Z,]/g, "").toUpperCase();
  let previousGuess = "";

  let currentResult = {};
  let loading = "idle";
  $: valid = currentResult.valid;

  async function handleSubmit(word) {
    previousGuess = word;
    loading = "loading";
    let results = await checkWord(word);
    currentResult = results[0];
    resultsStore.addAll(results);
    loading = "loaded";
  }

  /*   onMount(async () => {
    await handleSubmit("NOTVALID");
    await handleSubmit("VALID");
  });*/
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
          <span>&times;</span>
        {/if}
      {:else if loading === "loading"}
        <span>...</span>
        <!-- <LDSSpinner color="#ddd" /> -->
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
  }
</style>

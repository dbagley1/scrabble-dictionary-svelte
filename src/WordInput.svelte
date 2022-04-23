<script>
  import { resultsStore } from "./stores.js";
  import { checkWord } from "./checkWord.js";
  import LDSSpinner from "./LDSSpinner.svelte";

  export let wordInput = "";
  $: wordInput = wordInput.replaceAll(/[^a-zA-Z]/g, "").toUpperCase();

  let currentResult = {};
  let loading = "idle";
  $: valid = currentResult.valid;

  async function handleSubmit() {
    loading = "loading";
    currentResult = await checkWord(wordInput);
    resultsStore.add(currentResult);
    loading = "loaded";
  }
</script>

<div>
  <form on:submit|preventDefault={() => handleSubmit()} autocomplete="off">
    <div class={`input-wrapper ${loading} ${valid ? "valid" : "invalid"}`}>
      <input type="text" name="word-input" id="word-input" bind:value={wordInput} on:input={() => (loading = "idle")} />
      <div>
        {#if loading === "loaded"}
          {#if valid}
            <span>✔</span>
          {:else}
            <span>&times;</span>
          {/if}
        {:else if loading === "loading"}
          <LDSSpinner color="#ddd" />
        {/if}
      </div>
    </div>
    <input type="submit" value="Check" />
  </form>
</div>

<style lang="scss">
  .valid {
    --input-color: green;
  }

  .invalid {
    --input-color: red;
  }

  .loaded #word-input {
    color: var(--input-color);
    font-weight: 600;
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
</style>

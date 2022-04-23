<script>
  import { resultsStore } from "./stores.js";
  import { fly, slide, scale, fade, draw } from "svelte/transition";

  export let result;
</script>

<li class={`result ${result.valid ? "valid" : "invalid"}`} transition:slide on:click={() => resultsStore.toggleDefinition(result.id)}>
  <div class="result-header">
    <div class="valid-icon">{result.valid ? "✔" : "✖"}</div>
    <div class="result-word">{result.word}</div>
    <div class="result-delete" on:click|stopPropagation={() => resultsStore.delete(result.id)}>&times;</div>
  </div>
  {#if result.valid && result.showDefinition}
    <div class="definition" transition:slide>{result.definition}</div>
  {/if}
</li>

<style lang="scss">
  .result-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .result-word {
    flex-grow: 1;
    font-family: "Inter";
    font-weight: 700;
  }

  .result {
    text-align: center;
    font-size: 0.75rem;
    width: 100%;
    padding: 0.25rem 0.5rem;
    margin: 0.25rem 0;
    font-weight: 500;
    border: solid 1px var(--valid-color);
    word-break: break-word;
    cursor: pointer;
  }

  .valid {
    --valid-color: #40b140;
  }

  .invalid {
    --valid-color: #df4545;
  }

  .valid-icon {
    font-size: 0.75rem;
    color: var(--valid-color);
  }

  .result-delete {
    font-size: 0.75rem;
    color: #999;
    cursor: pointer;
    aspect-ratio: 1;
    width: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    line-height: 1rem;
    border-radius: 3px;

    &:hover {
      background-color: #df4545;
      color: white;
    }
  }

  .definition {
    width: 100%;
    font-family: "Roboto Condensed";
    font-weight: 400;
    color: #222;
  }
</style>

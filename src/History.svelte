<script>
  import ResultEntry from "./ResultEntry.svelte";

  import { resultsStore } from "./stores.js";
  import { fly, slide, scale, fade, draw } from "svelte/transition";

  export let showHistory = true;
</script>

<!-- Show/Hide History Button -->
<div class="history-buttons">
  <span
    class="button"
    on:click={() => {
      showHistory = !showHistory;
    }}
    style:margin-left="-1rem"
  >
    <i class={`fas ${showHistory ? "fa-angle-down" : "fa-angle-right"}`} style:margin-right="0.5rem" />History
  </span>
  <span class="button" on:click={() => confirm("Clear results history?") && resultsStore.clear()}>Clear</span>
</div>
{#if showHistory}
  <ul class="result-list" transition:slide>
    {#each $resultsStore as result (result.id)}
      <ResultEntry {result} />
    {/each}
  </ul>
{/if}

<style lang="scss">
  .result-list {
    width: 100%;
    max-height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: auto;
    overflow-x: hidden;
    margin-left: -0.65rem;
    padding-left: 1rem;
    border-left: solid 1px #ddd;

    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: nowrap;

    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: greedy;
  }

  .history-buttons {
    display: flex;
    justify-content: space-between;
    width: 100%;

    .button {
      font-family: Inter;
      font-weight: 400;
      display: inline-flex;
      align-items: center;
      cursor: pointer;
    }
  }
</style>

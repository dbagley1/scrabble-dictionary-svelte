<script>
  import { resultsStore } from "./stores.js";
</script>

<div>
  <ul>
    {#each $resultsStore as result (result.id)}
      <li>{result.word} is {result.valid ? "VALID" : "INVALID"}</li>
    {/each}
  </ul>
</div>

<style>
</style>

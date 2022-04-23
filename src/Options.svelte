<script>
  import { optionsStore } from "./stores.js";

  export let showDefinition = true;
</script>

<div class="options-container">
  <label for="showDefinition">
    <input type="checkbox" name="showDefinition" bind:value={showDefinition} on:change={optionsStore.toggleDefinition(showDefinition)} />
    Show Definitions
  </label>
</div>

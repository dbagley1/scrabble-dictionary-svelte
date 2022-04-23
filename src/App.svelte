<script>
  import WordInput from "./WordInput.svelte";
  import History from "./History.svelte";
  import Header from "./Header.svelte";
</script>

<div class="app-container">
  <Header />
  <main>
    <WordInput />
    <History />
  </main>
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
  }

  main {
    max-width: 600px;
    margin: 0 auto;
    align-items: center;
    height: 100%;
  }
</style>

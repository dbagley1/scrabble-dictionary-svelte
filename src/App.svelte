<script>
  import WordInput from "./WordInput.svelte";
  import History from "./History.svelte";
  import Header from "./Header.svelte";
  import Options from "./Options.svelte";
</script>

<div class="app-container">
  <main>
    <Header />
    <WordInput />
    <History />
    <!-- <Options /> -->
  </main>
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 20px;
    padding-bottom: 0;
  }

  main {
    display: flex;
    flex-flow: column nowrap;
    max-width: 600px;
    margin: 0 auto;
    align-items: center;
    height: 100%;
  }
</style>

<script>
  import WordInput from "./WordInput.svelte";
  import History from "./History.svelte";
  import Header from "./Header.svelte";
</script>

<Header />
<main>
  <WordInput />
  <History />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

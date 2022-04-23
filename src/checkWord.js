export const checkWord = async (word, optionsStore) => {
  let url = `https://fotf-cors.herokuapp.com/https://scrabble.deno.dev/?words=${word}`;
  let options = { origin: "https://scrabble.deno.dev" };

  let response = await fetch(url, options);
  let data = await response.json();
  console.log(data);

  let results = [];

  data.results.forEach((result, i) => {
    if (result.word) {
      results.push({ ...result, id: `${Date.now()}${i}`, showDefinition: optionsStore.showDefinition });
    };
  });

  return results;
};

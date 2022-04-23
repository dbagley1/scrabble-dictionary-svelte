export const checkWord = async (word) => {
  let url = `https://fotf-cors.herokuapp.com/https://scrabble.deno.dev/?words=${word}`;
  let options = { origin: "https://scrabble.deno.dev" };

  let response = await fetch(url, options);
  let data = await response.json();
  console.log(data);

  let results = data.results.map((result, i) => {
    return { ...result, id: `${Date.now()}${i}`, showDefinition: false };
  });

  return results;
};

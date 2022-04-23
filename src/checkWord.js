export const checkWord = async (word) => {
  let url = `http://fotf-cors.herokuapp.com/https://scrabble.deno.dev/?words=${word}`;
  let options = { origin: "https://scrabble.deno.dev" };

  let response = await fetch(url, options);
  let data = await response.json();
  console.log(data);

  let result = { ...data.results[0], id: Date.now() };
  return result;
};

const axios = require('axios');

axios.get('https://ozarktechwebdev.com/api/jokes.json')
  .then((response) => {
    const jokes = response.data.jokes;
    const randomIndex = Math.floor(Math.random() * jokes.length)
    const joke = jokes[randomIndex]

    console.log("Here's a developer joke for today:")
    console.log(`Q: ${joke.question}`)
    console.log(`A: ${joke.answer}`)
  })
  .catch(() => {
    console.log('could not fetch a joke. try again later')
  })

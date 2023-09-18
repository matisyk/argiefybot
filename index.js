require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitterClient.js")

const tweet = async () => {
  try {
    await twitterClient.v2.tweet("Mi vieja mula ya no es lo que era");
  } catch (e) {
    console.log(e)
  }
}

tweet();
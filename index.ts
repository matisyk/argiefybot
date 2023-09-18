import Twit from "twit";
import cron from "node-cron";
import config from "./config";

const T = new Twit(config);

function getCurrencyQuotes(): Record<string, number>{
  return {
    BTC: 50000,
    ETH: 3000,
    USD: 1,
  };
}

function generateTweetText(quotes: Record<string, number>): string {
  const tweetText = `Mi vieja mula ya no es lo que era`;
  return tweetText;
}

export function scheduleTweet() {
  cron.schedule("0 12 * * *", () => {
    const quotes = getCurrencyQuotes();
    const tweetText = generateTweetText(quotes);

    T.post("statuses/update", { status: tweetText }, (err, data, response) => {
      if (err) {
        console.error("Error sending tweet:", err);
      } else {
        console.log("Tweet sent successfully:", tweetText);
      }
    });
  });
}

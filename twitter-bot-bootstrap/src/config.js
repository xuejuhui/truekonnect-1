require('dotenv').config()

module.exports = {
  twitterKeys: {
    consumer_key: process.env.g2IUGq7LvlD4Ef9Ukmrjh8BRd,
    consumer_secret: process.env.kh5qCrFReFdt02RFCo41AN5H2Xq8nAUIDK6YvFlbZOiUdjkmxY,
    access_token: process.env.796428514622783488-M1TXgQpTR72tFejGozgndVBJQj5HuMu,
    access_token_secret: process.env.y836SdetVAXQefICuIPwIM1NQq0DChuqwPqr6PTTa2C4V
  },
  twitterConfig: {
    queryString: process.env.hairstylist,hair,
    resultType: process.env.RESULT_TYPE,
    language: process.env.English,
    username: process.env.TrueKonnect,
    retweet: process.env.TWITTER_RETWEET_RATE * 1000 * 60,
    like: process.env.TWITTER_LIKE_RATE * 1000 * 60,
    quote: process.env.TWITTER_QUOTE_RATE * 1000 * 60,
    searchCount: process.env.TWITTER_SEARCH_COUNT,
    randomReply: process.env.RANDOM_REPLY
  }
}

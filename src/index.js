const axios = require("axios");
const { parse } = require("node-html-parser");
const cheerio = require('cheerio');



const scrape = async (url) => {
  let data = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.90 Safari/537.36"
    }
  });

  const res = parse(data.data)
  console.log(res) 
};

scrape(
    "https://www.amazon.in/Cheetos-Masala-Balls-32g/dp/B016KNUF7I/ref=sr_1_1?crid=1DY4KWJUZ9F4P&keywords=cheetos&qid=1662920314&sprefix=cheeto%2Caps%2C613&sr=8-1"
);
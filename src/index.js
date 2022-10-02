const axios = require("axios");
const { parse } = require("node-html-parser");
const { JSDOM } = require("jsdom")
const cheerio = require('cheerio');

const getProductURL = (productid) => `https://www.amazon.in/gp/product/ajax/?asin=${productid}&m=&smid=A3S6IT2E3YMO1K&sourcecustomerorglistid=&sourcecustomerorglistitemid=&sr=&pc=dp&experienceId=aodAjaxMain`;


async function getPriceofProduct(productid){
    const producturl = getProductURL(productid);
    const { data: html} = await axios.get(producturl);
    //   headers: {
    //     Host: 'www.amazon.com',
    //     'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
    //     Pragma: 'no-cache',
    //     TE: 'Trailers', 
    //     'Upgrade-Insecure-Requests': 1
    //   },
    // }
    
    const dom = new JSDOM(html);
    console.log(dom.window.document.querySelector('.a-price .a-offscreen').textContent);
}

getPriceofProduct("B01G5AEA18");
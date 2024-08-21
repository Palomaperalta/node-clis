import fetch from "node-fetch";
import * as cheerio from "cheerio";

const response = await fetch("https://quotes.toscrape.com/random");
const body = await response.text();
const $ = cheerio.load(body);

const result = $("div[class=quote]>span").html();
console.log(result);

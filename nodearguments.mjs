import * as cheerio from "cheerio";
import * as commander from "commander";

// const args = process.argv;
// console.log(args);

// if (process.argv.length < 4) {
//   console.error("Expected at least two arguments!");
//   process.exit(1);
// }

// const url = process.argv[2];
// const selector = process.argv[3];

// const $ = cheerio.load(url);
// const result = $(selector);
// console.log(result);
// if (result) {
//   console.log("selector exists in url");
// }

const program = new commander.Command();
program
  .option("-u, --url <url>", "url to load in cheerio")
  .option("-s, --selector <selector>", "selector to search in the loaded url");

program.parse(process.argv);

const options = program.opts();

if (!options.url || !options.selector) {
  console.error("Define args");
}

const $ = cheerio.load(options.url);
const result = $(options.selector);
console.log(result);
if (result) {
  console.log("selector exists in url");
}

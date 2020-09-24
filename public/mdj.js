const markdownJson = require("markdown-json");
const settings = {
  name: "markdown-json",
  cwd: "./",
  src: "src/content/projects/",
  filePattern: "**/*.md",
  ignore: "*(icon|input)*",
  dist: "src/json/test.json",
  // server: false,
  // port: 3001,
  display: true,
};

var md2json = require("md-2-json");
const fetch = require("node-fetch");
// const chatPath =require("../src/content/projects/chat.md")
// console.log("path",chatPath);
// const loadData = async()=>{
//   try{
//     const response = await fetch(chatPath.uri)
//     const data = await response.text()
//     console.log(data);

//   }catch(error){
//     console.log(error);
//   }
// }
// loadData()

var fs = require("fs");
var yamlFront = require("yaml-front-matter");
var fm = require('front-matter')

fs.readFile(
  "/Users/roger/Documents/react/portfolio/src/content/projects/coffeshop.md",
  "utf8",
  function (err, data) {
    // console.log(yamlFront.loadFront(fileContents));
    if (err) throw err

    var content = fm(data)
  
    console.log(content)
  }
);

// console.log(output);

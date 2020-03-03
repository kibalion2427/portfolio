const markdownJson = require("markdown-json");
const settings = {
  name: "markdown-json",
  cwd: "./",
  src: "content/",
  filePattern: "**/*.md",
  ignore: "*(icon|input)*",
  dist: "src/json/data.json",
  // server: false,
  // port: 3001,
  display: true
};

var json = markdownJson(settings)
  .then(data => {
    // console.log("data:", data);
    // console.log(settings);
  })
  .catch(err => {
    // console.log("error:", err);
  });

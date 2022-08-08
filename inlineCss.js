var inlineCss = require("inline-css");
const pug = require("pug");
const fs = require("fs");

fs.readFile("index.html", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  inlineCss(data, { url: `file://${__dirname}/` })
    .then(function (html) {
      console.log("build done");
      fs.writeFile("index.inlined-css.html", html, (err) => {
        if (err) console.log(err);
      });
    })
    .catch((e) => console.log(e));
});

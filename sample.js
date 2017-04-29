const TextLintEngine = require("textlint").TextLintEngine;

const engine = new TextLintEngine({
  configFile: "config/.textlintrc"
});

engine.executeOnText("# test!!").then(results => {
  console.log(results[0].messages);

  if (engine.isErrorResults(results)) {
    const output = engine.formatResults(results);
    console.log(output);
  }
});

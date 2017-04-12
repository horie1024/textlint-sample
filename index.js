const TextLintEngine = require("textlint").TextLintEngine;

const engine = new TextLintEngine({
    rulePaths: [
      "node_modules/textlint-rule-preset-jtf-style",
      "node_modules/textlint-rule-preset-ja-technical-writing"
    ]
});

engine.executeOnText("# test!!").then(results => {
  console.log(results[0].messages);

  if (engine.isErrorResults(results)) {
    const output = engine.formatResults(results);
    console.log(output);
  }
});

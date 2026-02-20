const fs = require("fs");

function analyzeCode(code) {
  let suggestions = [];

  if (code.includes("console.log")) {
    suggestions.push("Avoid too many console.log statements.");
  }

  if (!code.includes("function")) {
    suggestions.push("Consider adding functions to organize code.");
  }

  if (suggestions.length === 0) {
    suggestions.push("Code structure looks good.");
  }

  return suggestions;
}

function runAgent() {
  console.log("Agent started...");

  const code = fs.readFileSync("./index.js", "utf-8");

  const results = analyzeCode(code);

  console.log("Suggestions:");
  results.forEach((s) => console.log("- " + s));

  fs.writeFileSync("report.txt", results.join("\n"));

  console.log("Report saved in report.txt");
}

runAgent();
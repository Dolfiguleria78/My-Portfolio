const fs = require("fs");
const path = require("path");

const files = [
  "src/sections/Hero.css",
  "src/sections/About.css",
  "src/components/HeroSection.css"
];

function validateCSS(content) {
  const errors = [];
  let braceCount = 0;
  let inComment = false;
  let lineNum = 1;
  
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];
    
    // Track line numbers
    if (char === "\n") lineNum++;
    
    // Handle comments
    if (char === "/" && nextChar === "*") {
      inComment = true;
      i++;
      continue;
    }
    if (char === "*" && nextChar === "/" && inComment) {
      inComment = false;
      i++;
      continue;
    }
    
    if (inComment) continue;
    
    // Track braces
    if (char === "{") braceCount++;
    if (char === "}") braceCount--;
    
    if (braceCount < 0) {
      errors.push(`Line ${lineNum}: Extra closing brace`);
      braceCount = 0;
    }
  }
  
  if (braceCount > 0) {
    errors.push(`Unclosed opening braces: ${braceCount}`);
  }
  
  return errors;
}

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf-8");
    const errors = validateCSS(content);
    
    console.log(`\n=== ${file} ===`);
    if (errors.length === 0) {
      console.log("✓ No syntax errors found (brace matching)");
    } else {
      console.log("✗ Errors found:");
      errors.forEach(err => console.log(`  - ${err}`));
    }
    
    // Show first 50 lines to inspect
    console.log("\nFirst 50 lines:");
    const lines = content.split("\n").slice(0, 50);
    lines.forEach((line, i) => console.log(`${i+1}: ${line}`));
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

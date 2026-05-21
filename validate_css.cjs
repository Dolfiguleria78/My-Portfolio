const fs = require("fs");
const path = require("path");

const files = [
  "src/sections/Hero.css",
  "src/sections/About.css",
  "src/components/HeroSection.css"
];

function validateCSS(content, filename) {
  const errors = [];
  let braceCount = 0;
  let inComment = false;
  let lineNum = 1;
  let currentLine = "";
  
  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];
    currentLine += char;
    
    // Track line numbers
    if (char === "\n") {
      lineNum++;
      currentLine = "";
    }
    
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
      errors.push(`Line ${lineNum}: Extra closing brace. Content: ${currentLine.trim()}`);
      braceCount = 0;
    }
  }
  
  if (braceCount > 0) {
    errors.push(`ERROR: ${braceCount} unclosed opening brace(s) - missing closing brace at end of file`);
  }
  
  return errors;
}

files.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      const errors = validateCSS(content, file);
      
      console.log(`\n${"=".repeat(60)}`);
      console.log(`FILE: ${file}`);
      console.log(`${"=".repeat(60)}`);
      
      if (errors.length === 0) {
        console.log("✓ No brace syntax errors found");
      } else {
        console.log("✗ SYNTAX ERRORS FOUND:");
        errors.forEach(err => console.log(`  ${err}`));
      }
      
      // Show content
      console.log("\nFILE CONTENT:");
      console.log(content);
    } else {
      console.log(`File not found: ${filePath}`);
    }
  } catch (e) {
    console.log(`Error reading ${file}: ${e.message}`);
  }
});

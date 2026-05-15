const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(/Avtalsväggen/g, 'Veridoca');
  content = content.replace(/avtalsväggen/g, 'veridoca');
  content = content.replace(/avtalsvaggen\.se/g, 'veridoca.se');
  fs.writeFileSync(filePath, content, 'utf8');
}
console.log("Replaced brand names");

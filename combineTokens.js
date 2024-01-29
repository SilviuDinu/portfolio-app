const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/assets/content');
const outputFile = path.join(__dirname, 'src/assets/tokens.json');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  }

  let combinedContent = {};

  files.forEach((file) => {
    if (file.endsWith('.tokens.json')) {
      const filePath = path.join(directoryPath, file);
      const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      combinedContent = { ...combinedContent, ...fileContent };
    }
  });

  fs.writeFileSync(outputFile, JSON.stringify(combinedContent));
  console.log('Combined file created at:', outputFile);
});

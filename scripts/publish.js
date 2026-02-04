const path = require('path');
const fs = require('fs');
const child_process = require('child_process');

const packageJson = require('../package.json');

packageJson.main = 'dist';
packageJson.types = 'dist';

const packageJsonPath = path.resolve(__dirname, '..', 'package.json');

const content = JSON.stringify(packageJson, null, 2) + '\n';

child_process.execSync('npm run build');

fs.writeFileSync(packageJsonPath, content, {
  encoding: 'utf-8',
});

try {
  const args = process.argv.slice(2).join(' ');
  child_process.execSync(`npm publish ${args}`);
} catch (err) {
  console.error(err);
}

child_process.execSync('git checkout -- "' + packageJsonPath + '"');

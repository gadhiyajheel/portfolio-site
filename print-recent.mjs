import fs from 'fs';
import path from 'path';

function getRecent(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
    .map(f => {
      const fullPath = path.join(dir, f);
      return {
        file: f,
        path: fullPath,
        time: fs.statSync(fullPath).mtime.getTime(),
        size: fs.statSync(fullPath).size
      };
    });
}

const dir = 'c:/Users/User/Downloads';
let files = getRecent(dir);
files.sort((a, b) => b.time - a.time);

const lines = ["Recent downloads:"];
for (let i = 0; i < 5 && i < files.length; i++) {
  lines.push(`${files[i].path} - Date: ${new Date(files[i].time).toISOString()} - Size: ${files[i].size} bytes`);
}
fs.writeFileSync('c:/Users/User/OneDrive/Documents/POrtfolio/portfolio-site/recent-downloads.txt', lines.join('\n'));
console.log("Written to recent-downloads.txt");

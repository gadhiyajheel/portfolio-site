import fs from 'fs';
import path from 'path';

function findRecentFiles(dir, maxAgeMs, results) {
  try {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      if (['AppData', '.gemini', 'node_modules', '.git'].includes(f)) continue; // skip huge/system dirs
      const fullPath = path.join(dir, f);
      try {
        const stats = fs.statSync(fullPath);
        if (stats.isDirectory()) {
          findRecentFiles(fullPath, maxAgeMs, results);
        } else if (/\.(jpg|jpeg|png)$/i.test(f)) {
          const age = Date.now() - stats.mtime.getTime();
          if (age < maxAgeMs) {
            results.push({ path: fullPath, time: stats.mtime.getTime(), size: stats.size });
          }
        }
      } catch (e) {
        // ignore access errors
      }
    }
  } catch (e) {
    // ignore
  }
}

const results = [];
// Last 3 days = 3 * 24 * 60 * 60 * 1000
findRecentFiles('c:/Users/User', 3 * 24 * 60 * 60 * 1000, results);

results.sort((a, b) => b.time - a.time);

const lines = ["Recent globally:"];
for (let i = 0; i < 10 && i < results.length; i++) {
  lines.push(`${results[i].path} - Date: ${new Date(results[i].time).toISOString()} - Size: ${results[i].size} bytes`);
}
fs.writeFileSync('c:/Users/User/OneDrive/Documents/POrtfolio/portfolio-site/recent-global.txt', lines.join('\n'));
console.log("Done");
